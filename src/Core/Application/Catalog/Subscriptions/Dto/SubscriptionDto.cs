namespace SoapCapital.Application.Catalog.Subscriptions.Dto;

public class SubscriptionDto
{
    public int Id { get; set; }
    public string UserName { get; set; } = string.Empty;
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public int PackageId { get; set; }
    public string PackageName { get; set; } = string.Empty;
    public decimal Price { get; set; }
}