namespace SoapCapital.Application.CoinGecko;

public interface ICoinGeckoClient
{
    Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken);
    Uri BuildApiUrl<TRequest>(string path, TRequest request);
}