using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Mvc;
using MudBlazor;
using MudBlazor.Services;
using MudExtensions.Services;
using Serilog;
using SoapCapital.Application;
using SoapCapital.Application.Common.Interfaces;
using SoapCapital.Infrastructure;
using SoapCapital.Infrastructure.Common;
using SoapCapital.Website.Components;
using SoapCapital.Website.Components.Account;
using SoapCapital.Website.Configurations;

StaticLogger.EnsureInitialized();
Log.Information("Server Booting Up...");

try
{
    var builder = WebApplication.CreateBuilder(args);

    builder.Host.AddConfigurations();
    builder.Host.UseSerilog((_, config) =>
    {
        config.WriteTo.Console()
            .ReadFrom.Configuration(builder.Configuration);
    });

    builder.Services.AddRazorComponents()
        .AddInteractiveServerComponents().AddHubOptions(options =>
            {
                options.MaximumReceiveMessageSize = ApplicationConstants.MaxAllowedVideoSize;
                options.ClientTimeoutInterval = TimeSpan.FromSeconds(60);
                options.HandshakeTimeout = TimeSpan.FromSeconds(30);
            }).AddCircuitOptions(o =>
        {
            if (builder.Environment.IsDevelopment())
            {
                o.DetailedErrors = true;   
            }
        });
    
    builder.Services.AddCascadingAuthenticationState();
    builder.Services.AddScoped<IdentityUserAccessor>();
    builder.Services.AddScoped<IdentityRedirectManager>();
    builder.Services.AddScoped<AuthenticationStateProvider, IdentityRevalidatingAuthenticationStateProvider>();

    builder.Services.AddInfrastructure(builder.Configuration);
    builder.Services.AddApplication();
    builder.Services.AddDatabaseDeveloperPageExceptionFilter();
    
    builder.Services.AddMudExtensions();
    builder.Services.AddMudServices(configuration =>
    {
        configuration.SnackbarConfiguration.PositionClass = Defaults.Classes.Position.TopRight;
        configuration.SnackbarConfiguration.HideTransitionDuration = 100;
        configuration.SnackbarConfiguration.ShowTransitionDuration = 100;
        configuration.SnackbarConfiguration.VisibleStateDuration = 3000;
        configuration.SnackbarConfiguration.ShowCloseIcon = false;
    });

    if (!builder.Environment.IsDevelopment())
    {
        builder.Services.AddResponseCompression(options =>
        {
            options.EnableForHttps = true;
        });   
    }
    
    var app = builder.Build();
    
    if (app.Environment.IsDevelopment())
    {
        app.UseMigrationsEndPoint();
    }

    app.UseInfrastructure(builder.Configuration, builder.Environment);

    app.MapControllers();
    
    app.MapRazorComponents<App>()
        .AddInteractiveServerRenderMode();

    app.MapAdditionalIdentityEndpoints();
    
    app.MapGet("/sitemap.xml",  (
        HttpContext context,
        [FromServices] ISitemapService sitemapService) => TypedResults.Content(sitemapService.GenerateSitemap(context), contentType: "application/xml", statusCode: 200)).DisableAntiforgery();
    
    app.UseStatusCodePagesWithRedirects("/error/{0}");
    
    if (!app.Environment.IsDevelopment())
    {
        app.UseResponseCompression();
    }

    Log.Information("Application running successfully");

    app.Run();
}
catch (Exception ex) when (!ex.GetType().Name.Equals("StopTheHostException", StringComparison.Ordinal))
{
    StaticLogger.EnsureInitialized();
    Log.Fatal(ex, "Unhandled exception");
}
finally
{
    StaticLogger.EnsureInitialized();
    Log.Information("Server Shutting down...");
    Log.CloseAndFlush();
}