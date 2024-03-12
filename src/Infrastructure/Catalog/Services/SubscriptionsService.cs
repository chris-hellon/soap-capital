using MediatR;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Subscriptions.Commands;
using SoapCapital.Application.Catalog.Subscriptions.Dto;
using SoapCapital.Application.Catalog.Subscriptions.Queries;

namespace SoapCapital.Infrastructure.Catalog.Services;

public class SubscriptionsService : ISubscriptionsService
{
    private readonly ISender _mediator;

    public SubscriptionsService(ISender mediator)
    {
        _mediator = mediator;
    }

    public Task<SubscriptionDto?> GetUserSubscription(GetUserSubscriptionRequest request)
    {
        return _mediator.Send(request);
    }

    public Task<IEnumerable<SubscriptionDto>> GetSubscriptions(GetSubscriptionsRequest request)
    {
        return _mediator.Send(request);
    }

    public Task<int?> CreateSubscription(CreateSubscriptionRequest request)
    {
        return _mediator.Send(request);
    }

    public Task DeleteSubscription(DeleteSubscriptionRequest request)
    {
        return _mediator.Send(request);
    }

    public Task SendSubscriptionReminder(SendReminderRequest request)
    {
        return _mediator.Send(request);
    }
}