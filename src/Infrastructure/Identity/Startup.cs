using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace SoapCapital.Infrastructure.Identity;

public static class Startup
{
    internal static IServiceCollection AddIdentity(this IServiceCollection services)
    {
        services.AddAuthentication(options =>
            {
                options.DefaultScheme = IdentityConstants.ApplicationScheme;
                options.DefaultSignInScheme = IdentityConstants.ExternalScheme;
            })
            .AddIdentityCookies(options =>
            {
                options.ApplicationCookie?.Configure(applcationCookieOptions =>
                {
                    applcationCookieOptions.LoginPath = "/login";
                    applcationCookieOptions.ReturnUrlParameter = "/members/latest-review";
                    applcationCookieOptions.AccessDeniedPath = "/access-denied";
                    applcationCookieOptions.ExpireTimeSpan = TimeSpan.FromHours(12);
                    applcationCookieOptions.SlidingExpiration = true;
                    applcationCookieOptions.Cookie.Name = "SoapCapital-auth";
                    applcationCookieOptions.Cookie.SameSite = SameSiteMode.Lax;
                    applcationCookieOptions.Cookie.HttpOnly = false;
                    applcationCookieOptions.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest; 
                });
            });

        return services;
    }
}