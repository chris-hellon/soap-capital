using SoapCapital.Application.Catalog.Subscriptions.Commands;
using SoapCapital.Application.Catalog.Subscriptions.Dto;
using SoapCapital.Application.Catalog.Subscriptions.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Catalog.Interfaces;

public interface ISubscriptionsService : ITransientService
{
    Task<SubscriptionDto?> GetUserSubscription(GetUserSubscriptionRequest request);

    Task<IEnumerable<SubscriptionDto>> GetSubscriptions(GetSubscriptionsRequest request);

    Task<int?> CreateSubscription(CreateSubscriptionRequest request);

    Task DeleteSubscription(DeleteSubscriptionRequest request);

    Task SendSubscriptionReminder(SendReminderRequest request);
}