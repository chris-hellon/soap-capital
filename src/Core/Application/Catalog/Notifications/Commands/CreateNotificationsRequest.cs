using Dapper;
using SoapCapital.Application.Catalog.Notifications.Dto;
using SoapCapital.Application.Common.Extensions;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Notifications.Commands;

public class CreateNotificationsRequest : IRequest
{
    public List<NotificationDto> Notifications { get; set; }
    public CreateNotificationsRequest(List<NotificationDto> notifications)
    {
        Notifications = notifications;
    }
}

internal class CreateNotificationsRequestHandler : IRequestHandler<CreateNotificationsRequest>
{
    private readonly IDapperRepository _repository;

    public CreateNotificationsRequestHandler(IDapperRepository repository)
    {
        _repository = repository;
    }

    public async Task Handle(CreateNotificationsRequest request, CancellationToken cancellationToken)
    {
        await _repository.CreateSingleAsync("CreateNotifications", new
        {
            Notifications = request.Notifications.CreateIdListTable().AsTableValuedParameter()
        });
    }
}