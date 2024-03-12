using Newtonsoft.Json;
using SoapCapital.Application.OpenNode.DTO;

namespace SoapCapital.Application.OpenNode.Queries;

public class GetChargeInfoReqest : IRequest<GetChargeInfoResponseDto>
{
    [JsonProperty("id")]
    public string Id { get; set; }

    public GetChargeInfoReqest(string id)
    {
        Id = id;
    }
}

internal class GetChargeInfoReqestHandler : IRequestHandler<GetChargeInfoReqest, GetChargeInfoResponseDto>
{
    private readonly IOpenNodeClient _openNodeClient;

    public GetChargeInfoReqestHandler(IOpenNodeClient openNodeClient)
    {
        _openNodeClient = openNodeClient ?? throw new ArgumentNullException(nameof(openNodeClient));
    }

    public async Task<GetChargeInfoResponseDto> Handle(GetChargeInfoReqest request, CancellationToken cancellationToken)
    {
        var httpRequest = new HttpRequestMessage(HttpMethod.Get, $"v1/charge/{request.Id}");

        using var response = await _openNodeClient.SendAsync(httpRequest, cancellationToken);
        
        response.EnsureSuccessStatusCode();

        var responseDataJson = await response.Content.ReadAsStringAsync(cancellationToken);
        var responseObject = JsonConvert.DeserializeObject<GetChargeInfoResponseDto>(responseDataJson);

        return responseObject ?? throw new InvalidOperationException();
    }
}