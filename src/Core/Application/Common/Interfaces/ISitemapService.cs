using Microsoft.AspNetCore.Http;

namespace SoapCapital.Application.Common.Interfaces;

public interface ISitemapService : ITransientService
{
    string? GenerateSitemap(HttpContext context);
}