using System.Data;
using SoapCapital.Application.Catalog.Notifications.Dto;

namespace SoapCapital.Application.Common.Extensions;

public static class DapperExtensions
{
    public static DataTable CreateIdListTable(this List<NotificationDto> notifications)
    {
        var dt = new DataTable();
        dt.Columns.Add("Body");
        dt.Columns.Add("NavigateUrl");
        dt.Columns.Add("IsRead");
        dt.Columns.Add("UserId");
        dt.Columns.Add("CreateDate");
        dt.Columns.Add("ReadDate");

        var dataRow = dt.NewRow();

        foreach (var notification in notifications)
        {
            dataRow = dt.NewRow();
            dataRow["Body"] = notification.Body;
            dataRow["NavigateUrl"] = notification.NavigateUrl;
            dataRow["IsRead"] = notification.IsRead;
            dataRow["UserId"] = notification.UserId;
            dataRow["CreateDate"] = notification.CreateDate;
            dataRow["ReadDate"] = notification.ReadDate;
            dt.Rows.Add(dataRow);
        }

        return dt;
    }
}