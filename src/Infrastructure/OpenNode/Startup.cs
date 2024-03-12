using System.Net.Http.Headers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SoapCapital.Application.OpenNode;

namespace SoapCapital.Infrastructure.OpenNode;

public static class Startup
{
    public static IServiceCollection AddOpenNode(this IServiceCollection services, IConfiguration config)
    {
        var openNodeSettings = services.GetOpenNodeSettings(config);

        if (openNodeSettings != null)
            services.AddOpenNodeHttpClient(openNodeSettings);

        return services;
    }

    private static void AddOpenNodeHttpClient(this IServiceCollection services, OpenNodeSettings openNodeSettings)
    {
        services.AddHttpClient<IOpenNodeClient, OpenNodeClient>(client =>
        {
            client.BaseAddress = new Uri("https://api.opennode.com/v1");
            client.DefaultRequestHeaders
                .Accept
                .Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(openNodeSettings.ApiKey);
        });
    }
    
    private static OpenNodeSettings? GetOpenNodeSettings(this IServiceCollection services, IConfiguration config)
    {
        var section = config.GetSection(nameof(OpenNodeSettings));

        if (section == null)
            throw new Exception("No Open Node Settings provided in appsettings.json.");

        services.Configure<OpenNodeSettings>(section);

        return section.Get<OpenNodeSettings>();
    }
}