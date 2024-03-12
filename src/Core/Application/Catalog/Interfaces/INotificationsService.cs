using SoapCapital.Application.Catalog.Notifications.Commands;
using SoapCapital.Application.Catalog.Notifications.Dto;
using SoapCapital.Application.Catalog.Notifications.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Catalog.Interfaces;

public interface INotificationsService : ITransientService
{
    Task CreateNotification(CreateNotificationRequest request);

    Task<IEnumerable<NotificationDto>> GetUserNotifications(GetUserNotificationsRequest request);

    Task FlagNotificationsAsRead(FlagNotificationsAsReadRequest request);

    Task CreateNotifications(CreateNotificationsRequest request);
}