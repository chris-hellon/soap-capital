using System.ComponentModel.DataAnnotations;
using SoapCapital.Application.Catalog.Notifications.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Notifications.Commands;

public class CreateNotificationRequest : IRequest
{
    public string? Body { get; set; }

    public string? NavigateUrl { get; set; }

    public bool IsRead { get; set; }
    
    [Required]
    public string? UserId { get; set; }

    public DateTime? ReadDate { get; set; }

    public CreateNotificationRequest(string? body, string? navigateUrl, bool isRead, string? userId)
    {
        Body = body;
        NavigateUrl = navigateUrl;
        IsRead = isRead;
        UserId = userId;
        ReadDate = isRead ? DateTime.Now : new DateTime?();
    }

    public CreateNotificationRequest(bool isRead, string? userId)
    {
        IsRead = isRead;
        UserId = userId;
        ReadDate = isRead ? DateTime.Now : new DateTime?();
    }
}

internal class CreateNotificationRequestHandler : IRequestHandler<CreateNotificationRequest>
{
    private readonly IDapperRepository<NotificationDto> _repository;

    public CreateNotificationRequestHandler(IDapperRepository<NotificationDto> repository)
    {
        _repository = repository;
    }

    public async Task Handle(CreateNotificationRequest request, CancellationToken cancellationToken)
    {
        await _repository.CreateSingleAsync("CreateNotification", request);
    }
}