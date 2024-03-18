using System.IO.Compression;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SoapCapital.Application.Solana.Wallet;
using SoapCapital.Infrastructure.Auth;
using SoapCapital.Infrastructure.Bybit;
using SoapCapital.Infrastructure.Caching;
using SoapCapital.Infrastructure.Common;
using SoapCapital.Infrastructure.Configuration;
using SoapCapital.Infrastructure.DexScreener;
using SoapCapital.Infrastructure.FileStorage;
using SoapCapital.Infrastructure.Identity;
using SoapCapital.Infrastructure.Mailing;
using SoapCapital.Infrastructure.Middleware;
using SoapCapital.Infrastructure.OpenNode;
using SoapCapital.Infrastructure.Persistence;
using SoapCapital.Infrastructure.Persistence.Context;
using SoapCapital.Infrastructure.Solana;
using SoapCapital.Infrastructure.Solana.Wallet;
using SoapCapital.Infrastructure.Stripe;

namespace SoapCapital.Infrastructure;

public static class Startup
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration config)
    {
        services.AddResponseCompression(options =>
        {
            options.EnableForHttps = true;
            options.Providers.Add<BrotliCompressionProvider>();
            options.Providers.Add<GzipCompressionProvider>();
            options.MimeTypes.Append("image/png");
            options.MimeTypes.Append("image/webp");
            options.MimeTypes.Append("image/jpg");
            options.MimeTypes.Append("image/jpeg");
        });

        services.Configure<BrotliCompressionProviderOptions>(options =>
        {
            options.Level = CompressionLevel.Fastest;
        });

        services.Configure<GzipCompressionProviderOptions>(options =>
        {
            options.Level = CompressionLevel.SmallestSize;
        });

        services.AddResponseCaching();
        
        services
            .AddAuth()
            .AddCaching(config)
            .AddExceptionMiddleware()
            .AddLocalization()
            .AddMailing(config)
            .AddAzureStorage(config)
            .AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()))
            .AddPersistence(config)
            .AddRequestLogging(config)
            .AddHttpContextAccessor()
            .AddStripe(config)
            .AddOpenNode(config)
            .AddBybitServices(config)
            .AddSolana(config)
            .AddDexScreener(config)
            .AddAppConfiguration(config)
            .AddRouting(options => options.LowercaseUrls = true)
            .AddControllers();
        
        services.AddScoped<UserManager<ApplicationUser>, UserManager<ApplicationUser>>();

        services.AddIdentityCore<ApplicationUser>(options =>
            {
                options.SignIn.RequireConfirmedAccount = false;
                options.User.RequireUniqueEmail = true;
            })
            .AddRoles<IdentityRole>()
            .AddSignInManager()
            .AddDefaultTokenProviders()
            .AddEntityFrameworkStores<ApplicationDbContext>();

        services.AddServices();
        services.AddScoped(s => new AppState());
        
        return services;
    }

    private static IServiceCollection AddAppConfiguration(this IServiceCollection services, IConfiguration config)=>
        services.Configure<AppSettings>(config.GetSection(nameof(AppSettings)));
    
    public static IApplicationBuilder UseInfrastructure(this IApplicationBuilder builder, IConfiguration config,
        IWebHostEnvironment env) =>
        builder
            .UseHttpsRedirection()
            .UseStaticFiles()
            .UseExceptionMiddleware()
            .UseRouting()
            .UseAuthentication()
            .UseCurrentUser()
            .UseAuthorization()
            .UseAntiforgery()
            .UseRequestLogging(config);
}