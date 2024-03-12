using Newtonsoft.Json;

namespace SoapCapital.Application.OpenNode.DTO;

public class GetWebhookResponseDto
{
    [JsonProperty("id")]
    public string? Id { get; set; }

    [JsonProperty("callback_url")]
    public string? CallbackUrl { get; set; }

    [JsonProperty("success_url")]
    public string? SuccessUrl { get; set; }

    [JsonProperty("status")]
    public string? Status { get; set; }

    [JsonProperty("payment_method")]
    public string? PaymentMethod { get; set; }

    [JsonProperty("order_id")]
    public string? OrderId { get; set; }

    [JsonProperty("description")]
    public string? Description { get; set; }

    [JsonProperty("missing_amt")]
    public string? MissingAmount { get; set; }

    [JsonProperty("price")]
    public string? Price { get; set; }

    [JsonProperty("fee")]
    public string? Fee { get; set; }

    [JsonProperty("auto_settle")]
    public string? AutoSettle { get; set; }

    [JsonProperty("fiat_value")]
    public string? FiatValue { get; set; }

    [JsonProperty("net_fiat_value")]
    public string? NetFiatValue { get; set; }

    [JsonProperty("hashed_order")]
    public string? HashedOrder { get; set; }

    [JsonProperty("overpaid_by")]
    public string? OverpaidBy { get; set; }
    
    public static GetWebhookResponseDto Parse(string data)
    {
        var paymentData = new GetWebhookResponseDto();

        string[] parameters = data.Split('&');
        foreach (string parameter in parameters)
        {
            string[] keyValue = parameter.Split('=');
            string key = keyValue[0];
            string value = keyValue.Length > 1 ? Uri.UnescapeDataString(keyValue[1]) : "";

            switch (key)
            {
                case "id":
                    paymentData.Id = value;
                    break;
                case "callback_url":
                    paymentData.CallbackUrl = value;
                    break;
                case "success_url":
                    paymentData.SuccessUrl = value;
                    break;
                case "status":
                    paymentData.Status = value;
                    break;
                case "payment_method":
                    paymentData.PaymentMethod = value;
                    break;
                case "order_id":
                    paymentData.OrderId = value;
                    break;
                case "description":
                    paymentData.Description = value;
                    break;
                case "missing_amt":
                    paymentData.MissingAmount = value;
                    break;
                case "price":
                    paymentData.Price = value;
                    break;
                case "fee":
                    paymentData.Fee = value;
                    break;
                case "auto_settle":
                    paymentData.AutoSettle = value;
                    break;
                case "fiat_value":
                    paymentData.FiatValue = value;
                    break;
                case "net_fiat_value":
                    paymentData.NetFiatValue = value;
                    break;
                case "hashed_order":
                    paymentData.HashedOrder = value;
                    break;
                case "overpaid_by":
                    paymentData.OverpaidBy = value;
                    break;
                default:
                    // Handle unknown parameters
                    break;
            }
        }

        return paymentData;
    }
}