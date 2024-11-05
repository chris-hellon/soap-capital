using System.Text.Json;
using Serilog;
using SoapCapital.Application.CoinGecko.Dto;

namespace SoapCapital.Application.CoinGecko.Queries;

public class GetCoinMarketChartRequest : IRequest<TokenPriceDataDto>
{
    public string TokenName { get; set; }
    public string VsCurrency { get; set; } = "usd";
    public int Days { get; set; } = 365;

    public GetCoinMarketChartRequest(string tokenName)
    {
        TokenName = tokenName;
    }
}

internal class GetCoinMarketChartRequestHandler : IRequestHandler<GetCoinMarketChartRequest, TokenPriceDataDto>
{
    private readonly ICoinGeckoClient _coinGeckoClient;
    private readonly ILogger _logger;
    private const string ApiKey = "CG-sW9P8yPJB3WbusCeFDkMy38d";
    
    public GetCoinMarketChartRequestHandler(ICoinGeckoClient coinGeckoClient, ILogger logger)
    {
        _coinGeckoClient = coinGeckoClient;
        _logger = logger;
    }

    public async Task<TokenPriceDataDto> Handle(GetCoinMarketChartRequest request, CancellationToken cancellationToken)
    {
        var fetchMarketChartTask = Task.Run(() => FetchMarketChartAsync(request, cancellationToken), cancellationToken);
        var fetchLivePriceTask = Task.Run(() => FetchLivePriceAsync(request, cancellationToken), cancellationToken);

        await Task.WhenAll(fetchMarketChartTask, fetchLivePriceTask);

        _logger.Information("Fetched market chart and live price successfully");
        
        return new TokenPriceDataDto()
        {
            Prices = fetchMarketChartTask.Result?.Prices ?? [],
            LivePrice = fetchLivePriceTask.Result
        };
    }
    
    private async Task<TokenPriceDataDto?> FetchMarketChartAsync(GetCoinMarketChartRequest request, CancellationToken cancellationToken)
    {
        var httpRequest = new HttpRequestMessage(HttpMethod.Get,
            $"https://api.coingecko.com/api/v3/coins/{request.TokenName}/market_chart?vs_currency={request.VsCurrency}&days={request.Days}");
        
        httpRequest.Headers.Add("accept", "application/json");
        httpRequest.Headers.Add("x-cg-demo-api-key", $"{ApiKey}");
        
        var response = await _coinGeckoClient.SendAsync(httpRequest, cancellationToken);

        response.EnsureSuccessStatusCode();

        var responseString = await response.Content.ReadAsStringAsync(cancellationToken);
        var marketChartRaw = JsonSerializer.Deserialize<TokenPriceDataDtoRaw>(responseString, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });

        var marketChart = new TokenPriceDataDto
        {
            Prices = marketChartRaw?.Prices.ConvertAll(p => new PricePoint
            {
                Timestamp = DateTimeOffset.FromUnixTimeMilliseconds((long)p[0]).DateTime,
                Price = p[1]
            }) ?? new List<PricePoint>(),
        };

        return marketChart;
    }

    private async Task<decimal?> FetchLivePriceAsync(GetCoinMarketChartRequest request, CancellationToken cancellationToken)
    {
        var httpRequest = new HttpRequestMessage(HttpMethod.Get,
            $"https://api.coingecko.com/api/v3/simple/price?ids={request.TokenName}&vs_currencies={request.VsCurrency}");
        
        httpRequest.Headers.Add("accept", "application/json");
        httpRequest.Headers.Add("x-cg-demo-api-key", $"{ApiKey}");
        
        var response = await _coinGeckoClient.SendAsync(httpRequest, cancellationToken);

        response.EnsureSuccessStatusCode();

        await using var responseStream = await response.Content.ReadAsStreamAsync(cancellationToken);
        var prices = await JsonSerializer.DeserializeAsync<Dictionary<string, Dictionary<string, decimal>>>(responseStream, cancellationToken: cancellationToken);

        return prices?[request.TokenName][request.VsCurrency];
    }
}