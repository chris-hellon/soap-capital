using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SoapCapital.Application.Bybit;

namespace SoapCapital.Infrastructure.Bybit;

public static class Startup
{
    public static IServiceCollection AddBybitServices(this IServiceCollection services, IConfiguration config)
    {
        var section = config.GetSection(nameof(BybitSettings));

        if (section == null)
            throw new Exception("No Bybit Settings provided in appsettings.json.");

        return services.Configure<BybitSettings>(section);
    }
}