namespace SoapCapital.Application.DexScreener;

public interface IDexScreenerClient
{
    Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken);
    Uri BuildApiUrl<TRequest>(string path, TRequest request);
}