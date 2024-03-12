using Newtonsoft.Json;

namespace SoapCapital.Application.OpenNode.DTO;

public class CreateOpenNodeChargeResponseDto
{
    [JsonProperty("data")]
    public CreateOpenNodeChargeResponseDataDto? Data { get; set; }
}