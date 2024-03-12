using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Caching;

public interface ICacheKeyService : IScopedService
{
    public string GetCacheKey(string name, object id, bool includeTenantId = true);
}