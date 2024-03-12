namespace SoapCapital.Website.EmailTemplates;

public class OrderConfirmationTemplateModel
{
    public int OrderId { get; set; }
    public string PackageName { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string? UnsubscribeUrl { get; set; }

    public OrderConfirmationTemplateModel(int orderId, string packageName, DateTime startDate, DateTime endDate, string? unsubscribeUrl = null)
    {
        OrderId = orderId;
        PackageName = packageName;
        StartDate = startDate;
        EndDate = endDate;
        UnsubscribeUrl = unsubscribeUrl;
    }
}