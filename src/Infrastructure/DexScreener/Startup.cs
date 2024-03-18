using System.Net.Http.Headers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SoapCapital.Application.DexScreener;

namespace SoapCapital.Infrastructure.DexScreener;

public static class Startup
{
    public static IServiceCollection AddDexScreener(this IServiceCollection services, IConfiguration config)
    {
        services.AddDexScreenerHttpClient();
        return services;
    }

    private static void AddDexScreenerHttpClient(this IServiceCollection services)
    {
        services.AddHttpClient<IDexScreenerClient, DexScreenerClient>(client =>
        {
            client.BaseAddress = new Uri("https://api.dexscreener.com");
            client.DefaultRequestHeaders
                .Accept
                .Add(new MediaTypeWithQualityHeaderValue("application/json"));
        });
    }
}