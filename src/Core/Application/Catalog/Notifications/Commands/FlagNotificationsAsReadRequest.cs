using System.Data;
using Dapper;
using SoapCapital.Application.Catalog.Notifications.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Notifications.Commands;

public class FlagNotificationsAsReadRequest : IRequest
{
    public List<int> NotificationIds { get; set; }

    public FlagNotificationsAsReadRequest(List<int> notificationIds)
    {
        NotificationIds = notificationIds;
    }
}

internal class FlagNotificationsAsReadRequestHandler : IRequestHandler<FlagNotificationsAsReadRequest>
{
    private readonly IDapperRepository<NotificationDto> _repository;

    public FlagNotificationsAsReadRequestHandler(IDapperRepository<NotificationDto> repository)
    {
        _repository = repository;
    }


    public async Task Handle(FlagNotificationsAsReadRequest request, CancellationToken cancellationToken)
    {
        var dataTable = new DataTable();
        dataTable.Columns.Add("Id");
        
        if (request.NotificationIds.Any())
        {
            DataRow dataRow;
            foreach (var id in request.NotificationIds)
            {
                dataRow = dataTable.NewRow();
                dataRow["Id"] = id;
                dataTable.Rows.Add(dataRow);
            }

            await _repository.UpdateSingleAsync("FlagNotificationsAsRead", new
            {
                IdList = dataTable.AsTableValuedParameter()
            });
        }
    }
}