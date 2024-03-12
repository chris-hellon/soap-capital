using Microsoft.AspNetCore.Http;
using SoapCapital.Application.Caching;

namespace SoapCapital.Infrastructure.Caching;

public class CacheKeyService : ICacheKeyService
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public CacheKeyService(IHttpContextAccessor httpContextAccessor) => _httpContextAccessor = httpContextAccessor;

    public string GetCacheKey(string name, object id, bool includeTenantId = true)
    {
        return $"GLOBAL-{name}-{id}";
    }
}