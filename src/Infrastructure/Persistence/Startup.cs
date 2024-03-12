using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using SoapCapital.Application.Persistence.Context;
using SoapCapital.Application.Persistence.Repository;
using SoapCapital.Infrastructure.Persistence.Context;
using SoapCapital.Infrastructure.Persistence.Repository;

namespace SoapCapital.Infrastructure.Persistence;

internal static class Startup
{
    private static readonly ILogger Logger = Log.ForContext(typeof(Startup));

    internal static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration config)
    {
        // TODO: there must be a cleaner way to do IOptions validation...
        var databaseSettings = config.GetSection(nameof(DatabaseSettings)).Get<DatabaseSettings>();
        var rootConnectionString = databaseSettings?.ConnectionString;
        if (string.IsNullOrEmpty(rootConnectionString))
        {
            throw new InvalidOperationException("DB ConnectionString is not configured.");
        }
        
        return services
            .Configure<DatabaseSettings>(config.GetSection(nameof(DatabaseSettings)))
            .AddDbContextFactory<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(rootConnectionString);
            }, ServiceLifetime.Scoped)
            .AddRepositories(config);
    }

    private static IServiceCollection AddRepositories(this IServiceCollection services, IConfiguration config)
    {
        return services.AddScoped<IDapperContext, DapperContext>()
            .AddScoped(typeof(IDapperRepository<>), typeof(DapperRepository<>))
            .AddScoped<IDapperRepository, DapperRepository>();
    }
}

