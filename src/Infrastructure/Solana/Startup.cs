using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using SoapCapital.Application.Solana.Configuration;
using Solnet.Rpc;

namespace SoapCapital.Infrastructure.Solana;

public static class Startup
{
    public static IServiceCollection AddSolana(this IServiceCollection services, IConfiguration config)
    {
        // Bind Solana settings from configuration
        services.Configure<SolanaSettings>(config.GetSection(nameof(SolanaSettings)));

        // Register IRpcClient and IStreamingRpcClient using the URL from SolanaSettings
        services.AddSingleton<IRpcClient>(provider =>
        {
            var solanaSettings = provider.GetRequiredService<IOptions<SolanaSettings>>().Value;
            return ClientFactory.GetClient(solanaSettings.WebsocketUrl);
        });

        // Register IStreamingRpcClient using ClientFactory with the URL from SolanaSettings
        services.AddSingleton<IStreamingRpcClient>(provider =>
        {
            var solanaSettings = provider.GetRequiredService<IOptions<SolanaSettings>>().Value;
            return ClientFactory.GetStreamingClient(solanaSettings.WebsocketUrl);
        });

        services.AddSingleton<SolanaWebSocketListener>();
        
        return services;
    }
}