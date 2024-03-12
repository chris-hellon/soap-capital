using Newtonsoft.Json;

namespace SoapCapital.Application.OpenNode.DTO;

public class GetChargeInfoResponseDto
{
    [JsonProperty("data")]
    public GetChargeInfoResponseDataDto? Data { get; set; }
}