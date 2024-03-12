using Newtonsoft.Json;

namespace SoapCapital.Application.OpenNode.DTO;

public class GetChargeInfoResponseDataDto
{
    [JsonProperty("status")]
    public string? Status { get; set; }

    [JsonProperty("order_id")]
    public int OrderId { get; set; }
}