using System.ComponentModel.DataAnnotations;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Notifications.Commands;
using SoapCapital.Application.Catalog.Subscriptions.Queries;
using SoapCapital.Application.Common.Exceptions;

namespace SoapCapital.Application.Catalog.Subscriptions.Commands;

public class SendReminderRequest : IRequest
{
    [Required] public string? UserId { get; set; }
    
    [Required] public string? BaseUrl { get; set; }

    public SendReminderRequest(string? userId, string? baseUrl)
    {
        UserId = userId;
        BaseUrl = baseUrl;
    }
}

internal class SendReminderRequestHandler : IRequestHandler<SendReminderRequest>
{
    private readonly ISubscriptionsService _subscriptionsService;
    private readonly INotificationsService _notificationsService;

    public SendReminderRequestHandler(INotificationsService notificationsService, ISubscriptionsService subscriptionsService)
    {
        _notificationsService = notificationsService;
        _subscriptionsService = subscriptionsService;
    }

    public async Task Handle(SendReminderRequest request, CancellationToken cancellationToken)
    {
        var subscription =
            await _subscriptionsService.GetUserSubscription(new GetUserSubscriptionRequest(request.UserId)) ??
            throw new NotFoundException("No subscription found for this user.");

        var currentDate = DateTime.Now;
        var subscriptionEndDate = subscription.EndDate;

        var diff = subscriptionEndDate - currentDate;
        var days = diff.Days;

        var message =
            $"Your subscription will expire in {days} day{(days > 1 ? "s" : "")}.<br />Click here to renew.";

        switch (days)
        {
            case 0:
                message = "Your subscription expires today. Click here to renew.";
                break;
            case < 0:
                message = "Your subscription has expired. Click here to renew.";
                break;
        }

        var url = $"{request.BaseUrl}choose-membership";

        await _notificationsService.CreateNotification(new CreateNotificationRequest(message, url, false, request.UserId));
    }
}