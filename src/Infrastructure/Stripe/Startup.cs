using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SoapCapital.Application.Stripe;

namespace SoapCapital.Infrastructure.Stripe;

public static class Startup
{
    public static IServiceCollection AddStripe(this IServiceCollection services, IConfiguration config)=>
        services.Configure<StripeSettings>(config.GetSection(nameof(StripeSettings)));
}