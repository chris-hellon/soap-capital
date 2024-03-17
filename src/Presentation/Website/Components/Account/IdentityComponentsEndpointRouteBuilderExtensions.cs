using System.Buffers;
using System.Collections.Specialized;
using System.Security.Claims;
using System.Text;
using BlazorTemplater;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Notifications.Commands;
using SoapCapital.Application.Catalog.Orders.Commands;
using SoapCapital.Application.Catalog.Subscriptions.Commands;
using SoapCapital.Application.Mailing;
using SoapCapital.Application.OpenNode.DTO;
using SoapCapital.Application.Solana.Wallet;
using SoapCapital.Infrastructure.Catalog.Services;
using SoapCapital.Infrastructure.Identity;
using SoapCapital.Infrastructure.Solana.Wallet;
using SoapCapital.Website.Components.Account.Pages;
using SoapCapital.Website.Components.Account.Pages.Manage;
using SoapCapital.Website.EmailTemplates;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace SoapCapital.Website.Components.Account;

internal static class IdentityComponentsEndpointRouteBuilderExtensions
{
    // These endpoints are required by the Identity Razor components defined in the /Components/Account/Pages directory of this project.
    public static IEndpointConventionBuilder MapAdditionalIdentityEndpoints(this IEndpointRouteBuilder endpoints)
    {
        ArgumentNullException.ThrowIfNull(endpoints);

        endpoints.MapPost("open-node-webhook/{orderId:int}/{subscriptionId:int?}", async (
            int orderId,
            int? subscriptionId,
            HttpContext context,
            [FromServices] IOrdersService ordersService,
            [FromServices] ISubscriptionsService subscriptionsService,
            [FromServices] INotificationsService notificationsService,
            [FromServices] IMailService mailService,
            [FromServices] UserManager<ApplicationUser> userManager,
            [FromServices] Serilog.ILogger logger) =>
        {
            var requestBody = await context.Request.BodyReader.ReadAsync();
            var requestBodyString = Encoding.UTF8.GetString(requestBody.Buffer.ToArray());

            try
            {
                var openNodeResponse = GetWebhookResponseDto.Parse(requestBodyString);

                if (openNodeResponse is {Status: "paid"})
                {
                    var order = await ordersService.GetOrder(orderId);

                    if (order != null)
                    {
                        var createSubscriptionRequest = new CreateSubscriptionRequest(order.UserId, order.PackageId, order.Id);

                        if (subscriptionId.HasValue)
                            await subscriptionsService.CreateSubscription(
                                new CreateSubscriptionRequest(order.UserId, order.PackageId, order.Id)
                                {
                                    Id = subscriptionId
                                });
                        
                        subscriptionId ??= await subscriptionsService.CreateSubscription(createSubscriptionRequest);

                        if (subscriptionId.HasValue)
                        {
                            await ordersService.UpdateOrder(new UpdateOrderRequest(order.Id, order.OpenNodeId, true, null));

                            var url = $"{context.Request.Scheme}://{context.Request.Host}/account/subscription";
                            await notificationsService.CreateNotification(new CreateNotificationRequest(
                                "Your order has been successful.<br />View your subscription here.", url, false,
                                order.UserId));

                            await context.Response.WriteAsync("Webhook received successfully");

                            logger.Information("Order {OrderId} processed successfully", orderId);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex, ex.Message);
            }
        });

        var accountGroup = endpoints.MapGroup("/Account");

        accountGroup.MapPost("/PerformExternalLogin", (
            HttpContext context,
            [FromServices] SignInManager<ApplicationUser> signInManager,
            [FromForm] string provider,
            [FromForm] string returnUrl) =>
        {
            IEnumerable<KeyValuePair<string, StringValues>> query =
            [
                new("ReturnUrl", returnUrl),
                new("Action", ExternalLogin.LoginCallbackAction)
            ];

            var redirectUrl = UriHelper.BuildRelative(
                context.Request.PathBase,
                "/Account/ExternalLogin",
                QueryString.Create(query));

            var properties = signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
            return TypedResults.Challenge(properties, [provider]);
        });

        accountGroup.MapPost("/Logout", async (
            ClaimsPrincipal user,
            SignInManager<ApplicationUser> signInManager,
            [FromForm] string returnUrl) =>
        {
            await signInManager.SignOutAsync();
            return TypedResults.LocalRedirect($"~/{returnUrl}");
        }).DisableAntiforgery();
        


        var manageGroup = accountGroup.MapGroup("/Manage").RequireAuthorization();

        manageGroup.MapPost("/LinkExternalLogin", async (
            HttpContext context,
            [FromServices] SignInManager<ApplicationUser> signInManager,
            [FromForm] string provider) =>
        {
            // Clear the existing external cookie to ensure a clean login process
            await context.SignOutAsync(IdentityConstants.ExternalScheme);

            var redirectUrl = UriHelper.BuildRelative(
                context.Request.PathBase,
                "/Account/Manage/ExternalLogins",
                QueryString.Create("Action", ExternalLogins.LinkLoginCallbackAction));

            var properties = signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl,
                signInManager.UserManager.GetUserId(context.User));
            return TypedResults.Challenge(properties, [provider]);
        });

        var loggerFactory = endpoints.ServiceProvider.GetRequiredService<ILoggerFactory>();
        var downloadLogger = loggerFactory.CreateLogger("DownloadPersonalData");

        manageGroup.MapPost("/DownloadPersonalData", async (
            HttpContext context,
            [FromServices] UserManager<ApplicationUser> userManager,
            [FromServices] AuthenticationStateProvider authenticationStateProvider) =>
        {
            var user = await userManager.GetUserAsync(context.User);
            if (user is null)
            {
                return Results.NotFound($"Unable to load user with ID '{userManager.GetUserId(context.User)}'.");
            }

            var userId = await userManager.GetUserIdAsync(user);
            downloadLogger.LogInformation("User with ID '{UserId}' asked for their personal data.", userId);

            // Only include personal data for download
            var personalData = new Dictionary<string, string>();
            var personalDataProps = typeof(ApplicationUser).GetProperties().Where(
                prop => Attribute.IsDefined(prop, typeof(PersonalDataAttribute)));
            foreach (var p in personalDataProps)
            {
                personalData.Add(p.Name, p.GetValue(user)?.ToString() ?? "null");
            }

            var logins = await userManager.GetLoginsAsync(user);
            foreach (var l in logins)
            {
                personalData.Add($"{l.LoginProvider} external login provider key", l.ProviderKey);
            }

            personalData.Add("Authenticator Key", (await userManager.GetAuthenticatorKeyAsync(user))!);
            var fileBytes = JsonSerializer.SerializeToUtf8Bytes(personalData);

            context.Response.Headers.TryAdd("Content-Disposition", "attachment; filename=PersonalData.json");
            return TypedResults.File(fileBytes, contentType: "application/json", fileDownloadName: "PersonalData.json");
        });

        return accountGroup;
    }
}