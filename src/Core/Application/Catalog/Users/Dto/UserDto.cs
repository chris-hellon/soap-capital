namespace SoapCapital.Application.Catalog.Users.Dto;

public class UserDto
{
    public string Id { get; set; } = string.Empty;
    public string UserName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string DiscordUserName { get; set; } = string.Empty;
    public bool IsAdmin { get; set; }
    public bool HasSubscription { get; set; }
    public DateTime? SubscriptionEndDate { get; set; }
    public int? DaysUntilExpiry { get; set; }
    public DateTime SignUpDate { get; set; }
    public int? PackageId { get; set; }
}