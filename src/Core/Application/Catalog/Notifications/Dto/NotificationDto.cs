namespace SoapCapital.Application.Catalog.Notifications.Dto;

public class NotificationDto
{
    public int? Id { get; set; }
    public string? Body { get; set; }
    public string? NavigateUrl { get; set; }
    public bool IsRead { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime? ReadDate { get; set; }
    public string? UserId { get; set; }

    public NotificationDto()
    {
    }
}