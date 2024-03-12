using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Subscriptions.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Infrastructure.Auth;

public class UserHasSubscriptionRequirement : IAuthorizationRequirement
{
}

public class UserHasSubscriptionAuthHandler : AuthorizationHandler<UserHasSubscriptionRequirement>
{
    private readonly ICurrentUser _currentUser;
    private readonly ISubscriptionsService _subscriptionsService;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public UserHasSubscriptionAuthHandler(ICurrentUser currentUser, ISubscriptionsService subscriptionsService, IHttpContextAccessor httpContextAccessor)
    {
        _currentUser = currentUser;
        _subscriptionsService = subscriptionsService;
        _httpContextAccessor = httpContextAccessor;
    }

    protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, UserHasSubscriptionRequirement requirement)
    {
        if (context.Resource is not HttpContext httpContext)
        {
            if (_httpContextAccessor.HttpContext == null) return;
            
            httpContext = _httpContextAccessor.HttpContext;
        }

        if (!_currentUser.IsAuthenticated()) return;

        var userId = _currentUser.GetUserId();
        var subscription = await _subscriptionsService.GetUserSubscription(new GetUserSubscriptionRequest(userId.ToString()));

        if (subscription == null)
        {
            httpContext.Response.Redirect("/account/subscription");
        }
        
        context.Succeed(requirement);
    }
}