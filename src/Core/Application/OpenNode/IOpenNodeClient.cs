namespace SoapCapital.Application.OpenNode;

public interface IOpenNodeClient
{
    Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken);
    Uri BuildApiUrl<TRequest>(string path, TRequest request);
}