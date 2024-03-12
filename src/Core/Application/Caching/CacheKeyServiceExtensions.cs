namespace SoapCapital.Application.Caching;

public static class CacheKeyServiceExtensions
{
    public static string GetCacheKey<TEntity>(this ICacheKeyService cacheKeyService, object id)
    where TEntity : class =>
        cacheKeyService.GetCacheKey(typeof(TEntity).Name, id);
}