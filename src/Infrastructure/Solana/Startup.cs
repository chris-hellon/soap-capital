using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SoapCapital.Application.Solana.Configuration;

namespace SoapCapital.Infrastructure.Solana;

public static class Startup
{
    public static IServiceCollection AddSolana(this IServiceCollection services, IConfiguration config)=>
        services.Configure<SolanaSettings>(config.GetSection(nameof(SolanaSettings)));
}