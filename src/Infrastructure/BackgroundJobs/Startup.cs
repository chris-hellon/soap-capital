using Hangfire;
using Hangfire.SqlServer;
using HangfireBasicAuthenticationFilter;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Serilog;
using SoapCapital.Application.Catalog.Users.Commands;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Infrastructure.BackgroundJobs;

public static class Startup
{
    private static readonly ILogger _logger = Log.ForContext(typeof(Startup));

    internal static IServiceCollection AddBackgroundJobs(this IServiceCollection services, IConfiguration config)
    {
        services.AddHangfireServer(options => config.GetSection("HangfireSettings:Server").Bind(options));
        
        var storageSettings = config.GetSection("HangfireSettings:Storage").Get<HangfireStorageSettings>();
        if (storageSettings is null) throw new Exception("Hangfire Storage Provider is not configured.");
        if (string.IsNullOrEmpty(storageSettings.StorageProvider)) throw new Exception("Hangfire Storage Provider is not configured.");
        if (string.IsNullOrEmpty(storageSettings.ConnectionString)) throw new Exception("Hangfire Storage Provider ConnectionString is not configured.");
        _logger.Information("Hangfire: Current Storage Provider : {StorageSettingsStorageProvider}", storageSettings.StorageProvider);
        _logger.Information("For more Hangfire storage, visit https://www.hangfire.io/extensions.html");

        services.AddSingleton<JobActivator, SoapCapitalJobActivator>();

        GlobalConfiguration.Configuration.UseSerializerSettings(new JsonSerializerSettings
        {
            TypeNameHandling = TypeNameHandling.All
        });
        
        services.AddHangfire((provider, hangfireConfig) => hangfireConfig
            .UseDatabase(storageSettings.StorageProvider, storageSettings.ConnectionString, config)
            .UseFilter(new SoapCapitalJobFilter(provider))
            .UseFilter(new LogJobFilter()));

        return services;
    }

    private static IGlobalConfiguration UseDatabase(this IGlobalConfiguration hangfireConfig, string dbProvider,
        string connectionString, IConfiguration config)
    {
        var settings = config.GetSection("HangfireSettings:Storage:Options").Get<SqlServerStorageOptions>();
        
        return hangfireConfig.UseSqlServerStorage(
            () => new Microsoft.Data.SqlClient.SqlConnection(connectionString), settings);
    }
       

    internal static IApplicationBuilder UseHangfireDashboard(this IApplicationBuilder app, IConfiguration config)
    {
        var dashboardOptions = config.GetSection("HangfireSettings:Dashboard").Get<DashboardOptions>();
        if (dashboardOptions is null) throw new Exception("Hangfire Dashboard is not configured.");
        dashboardOptions.Authorization = new[]
        {
            new HangfireCustomBasicAuthenticationFilter
            {
                User = config.GetSection("HangfireSettings:Credentials:User").Value,
                Pass = config.GetSection("HangfireSettings:Credentials:Password").Value
            }
        };

        return app.UseHangfireDashboard(config["HangfireSettings:Route"], dashboardOptions);
    }

    internal static IApplicationBuilder ConfigureBackgroundJobs(this IApplicationBuilder app)
    {
        using var serviceScope = app.ApplicationServices.CreateScope();
        
        var services = serviceScope.ServiceProvider;

        var jobService = services.GetRequiredService<IJobService>();

        jobService.AddOrUpdate("SendExpiringUsersReminder", new SendExpiryEmailRequest(), Cron.Hourly());

        return app;
    }
}