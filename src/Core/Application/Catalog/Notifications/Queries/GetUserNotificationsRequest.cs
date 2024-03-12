using SoapCapital.Application.Catalog.Notifications.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Notifications.Queries;

public class GetUserNotificationsRequest : IRequest<IEnumerable<NotificationDto>>
{
    public string? UserId { get; set; }

    public GetUserNotificationsRequest(string? userId)
    {
        UserId = userId;
    }
}

internal class GetUserNotificationsRequestHandler : IRequestHandler<GetUserNotificationsRequest, IEnumerable<NotificationDto>>
{
    private readonly IDapperRepository<NotificationDto> _repository;

    public GetUserNotificationsRequestHandler(IDapperRepository<NotificationDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<NotificationDto>> Handle(GetUserNotificationsRequest request, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetNotifications", request);
    }
}