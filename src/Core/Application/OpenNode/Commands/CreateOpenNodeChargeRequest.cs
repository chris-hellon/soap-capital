using System.Text;
using Newtonsoft.Json;
using SoapCapital.Application.OpenNode.DTO;

namespace SoapCapital.Application.OpenNode.Commands;

public class CreateOpenNodeChargeRequest : IRequest<CreateOpenNodeChargeResponseDto>
{
    [JsonProperty("description")]
    public string Description { get; set; }

    [JsonProperty("amount")]
    public decimal Amount { get; set; }

    [JsonProperty("currency")]
    public string Currency { get; set; } = "USD";

    [JsonProperty("order_id")]
    public int OrderId { get; set; }

    [JsonProperty("customer_name")]
    public string CustomerName { get; set; }

    [JsonProperty("customer_email")]
    public string CustomerEmail { get; set; }

    [JsonProperty("notif_email")]
    public string NotificationEmail { get; set; }

    [JsonProperty("success_url")]
    public string SuccessUrl { get; set; }

    [JsonProperty("callback_url")]
    public string CallbackUrl { get; set; }
    
    [JsonProperty("auto_settle")]
    public bool AutoSettle { get; set; }

    public CreateOpenNodeChargeRequest(string description, decimal amount, int orderId, string customerName, string customerEmail, string notificationEmail, string successUrl, string callbackUrl)
    {
        Description = description;
        Amount = amount;
        OrderId = orderId;
        CustomerName = customerName;
        CustomerEmail = customerEmail;
        NotificationEmail = notificationEmail;
        SuccessUrl = successUrl;
        CallbackUrl = callbackUrl;
    }
}

internal class CreateOpenNodeChargeRequestHandler : IRequestHandler<CreateOpenNodeChargeRequest, CreateOpenNodeChargeResponseDto>
{
    private readonly IOpenNodeClient _openNodeClient;

    public CreateOpenNodeChargeRequestHandler(IOpenNodeClient openNodeClient)
    {
        _openNodeClient = openNodeClient ?? throw new ArgumentNullException(nameof(openNodeClient));
    }

    public async Task<CreateOpenNodeChargeResponseDto> Handle(CreateOpenNodeChargeRequest request, CancellationToken cancellationToken)
    {
        var httpRequest = new HttpRequestMessage(HttpMethod.Post, "v1/charges");
        
        using StringContent jsonContent = new(
            JsonConvert.SerializeObject(request),
            Encoding.UTF8,
            "application/json");

        httpRequest.Content = jsonContent;
        
        using var response = await _openNodeClient.SendAsync(httpRequest, cancellationToken);
        
        response.EnsureSuccessStatusCode();

        var responseDataJson = await response.Content.ReadAsStringAsync(cancellationToken);
        var responseObject = JsonConvert.DeserializeObject<CreateOpenNodeChargeResponseDto>(responseDataJson);

        return responseObject ?? throw new InvalidOperationException();
    }
}