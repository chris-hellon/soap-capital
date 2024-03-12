using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using SoapCapital.Application.Common.Interfaces;
using SoapCapital.Infrastructure.Identity;

namespace SoapCapital.Infrastructure.Auth;

internal static class Startup
{
    internal static IServiceCollection AddAuth(this IServiceCollection services)
    {
        services
            .AddCurrentUser()
            .AddIdentity();
            //.AddUserSubscriptionAuthHandler();
        
        return services;
    }

    internal static IApplicationBuilder UseCurrentUser(this IApplicationBuilder app) =>
        app.UseMiddleware<CurrentUserMiddleware>();

    private static IServiceCollection AddCurrentUser(this IServiceCollection services) =>
        services
            .AddScoped<CurrentUserMiddleware>()
            .AddScoped<ICurrentUser, CurrentUser>()
            .AddScoped(sp => (ICurrentUserInitializer)sp.GetRequiredService<ICurrentUser>());

    private static void AddUserSubscriptionAuthHandler(this IServiceCollection services)
    {
        services.AddAuthorizationBuilder()
            .AddPolicy("UserHasSubscription", policy => { policy.Requirements.Add(new UserHasSubscriptionRequirement()); });
        
        services.AddScoped<IAuthorizationHandler, UserHasSubscriptionAuthHandler>();
    }
}