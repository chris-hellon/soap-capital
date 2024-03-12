using MediatR;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Notifications.Commands;
using SoapCapital.Application.Catalog.Notifications.Dto;
using SoapCapital.Application.Catalog.Notifications.Queries;

namespace SoapCapital.Infrastructure.Catalog.Services;

public class NotificationsService : INotificationsService
{
    private readonly ISender _mediator;

    public NotificationsService(ISender mediator)
    {
        _mediator = mediator;
    }

    public Task CreateNotification(CreateNotificationRequest request)
    {
        return _mediator.Send(request);
    }

    public Task<IEnumerable<NotificationDto>> GetUserNotifications(GetUserNotificationsRequest request)
    {
        return _mediator.Send(request);
    }

    public Task FlagNotificationsAsRead(FlagNotificationsAsReadRequest request)
    {
        return _mediator.Send(request);
    }

    public Task CreateNotifications(CreateNotificationsRequest request)
    {
        return _mediator.Send(request);
    }
}