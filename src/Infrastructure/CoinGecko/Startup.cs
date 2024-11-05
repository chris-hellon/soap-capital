using System.Net.Http.Headers;
using Microsoft.Extensions.DependencyInjection;
using SoapCapital.Application.CoinGecko;

namespace SoapCapital.Infrastructure.CoinGecko;

public static class Startup
{
    public static IServiceCollection AddCoinGecko(this IServiceCollection services)
    {
        services.AddCoinGeckoHttpClient();
        return services;
    }

    private static void AddCoinGeckoHttpClient(this IServiceCollection services)
    {
        services.AddHttpClient<ICoinGeckoClient, CoinGeckoClient>(client =>
        {
            client.BaseAddress = new Uri("https://api.coingecko.com/api/v3/");
            client.DefaultRequestHeaders
                .Accept
                .Add(new MediaTypeWithQualityHeaderValue("application/json"));
        });
    }
}