using System.Text;
using System.Xml.Serialization;
using Microsoft.AspNetCore.Http;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Videos.Queries;
using AspNetCore.SEOHelper.Sitemap;
using SoapCapital.Application.Common.Extensions;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Infrastructure.Common.Services;

public class SitemapService : ISitemapService
{
    private readonly IVideosService _videosService;

    public SitemapService(IVideosService videosService)
    {
        _videosService = videosService;
    }
    
    public string GenerateSitemap(HttpContext context)
    {
        var sb = new StringBuilder();
        sb.Append(GenerateSitemapString(context));

        return sb.ToString();
    }
    
    private string GenerateSitemapString(HttpContext context)
    {
        var baseUrl = $"{context.Request.Scheme}://{context.Request.Host}";

        var sitemapNodes = new List<SitemapNode>()
            {
                new() { LastModified = DateTime.UtcNow, Priority = 0.8, Url = baseUrl, Frequency = SitemapFrequency.Weekly },
                new() { LastModified = DateTime.UtcNow, Priority = 0.3, Url = baseUrl + "/about", Frequency = SitemapFrequency.Monthly },
                new() { LastModified = DateTime.UtcNow, Priority = 0.1, Url = baseUrl + "/disclaimer", Frequency = SitemapFrequency.Yearly },
                new() { LastModified = DateTime.UtcNow, Priority = 0.1, Url = baseUrl + "/terms-and-conditions", Frequency = SitemapFrequency.Yearly },
                new() { LastModified = DateTime.UtcNow, Priority = 0.1, Url = baseUrl + "/login", Frequency = SitemapFrequency.Yearly },
                new() { LastModified = DateTime.UtcNow, Priority = 0.1, Url = baseUrl + "/register", Frequency = SitemapFrequency.Yearly },
                new() { LastModified = DateTime.UtcNow, Priority = 0.1, Url = baseUrl + "/forgot-password", Frequency = SitemapFrequency.Yearly }
            };

        var membersSections = new List<string>()
            {
                "latest-review",
                "market-reviews",
                "education",
                "resources",
                "live-trading",
                "my-account",
                "email",
                "change-password",
                "two-factor-authentication",
                "personal-data",
                "subscription"
            };

        membersSections.ForEach(async membersSection =>
        {
            sitemapNodes.Add(new SitemapNode { LastModified = DateTime.UtcNow, Priority = 0.8, Url = $"{baseUrl}/members/{membersSection}", Frequency = SitemapFrequency.Weekly });

            var videos = membersSection switch
            {
                "market-reviews" => await _videosService.GetVideos(new GetMarketReviewsRequest()),
                "education" => await _videosService.GetVideos(new GetMembersEducationRequest()),
                "resources" => await _videosService.GetVideos(new GetResourcesVideosRequest()),
                _ => null
            };

            if (videos != null)
            {
                sitemapNodes.AddRange(videos.Select(video => $"members/{membersSection}/{video.Id}/{video.Title.UrlFriendly()}").Select(url => new SitemapNode {LastModified = DateTime.UtcNow, Priority = 0.6, Url = $"{baseUrl}/{url}", Frequency = SitemapFrequency.Weekly}));
            }
        });


        var adminSections = new List<string>()
            {
                "videos",
                "charts",
                "packages",
                "live-trading",
                "users",
                "orders",
                "pages/home",
                "pages/about",
                "pages/terms-and-conditions",
                "pages/disclaimer"
            };

        adminSections.ForEach(adminSection =>
        {
            sitemapNodes.Add(new SitemapNode { LastModified = DateTime.UtcNow, Priority = 0.6, Url = $"{baseUrl}/admin/{adminSection}", Frequency = SitemapFrequency.Weekly });
        });

        var freeContentSections = new List<string>()
            {
                "gm-bitcoin",
                "education",
                "charts"
            };

        freeContentSections.ForEach(async freeContentSection =>
        {
            sitemapNodes.Add(new SitemapNode { LastModified = DateTime.UtcNow, Priority = 0.6, Url = $"{baseUrl}/free-content/{freeContentSection}", Frequency = SitemapFrequency.Weekly });

            var videos = freeContentSection switch
            {
                "education" => await _videosService.GetVideos(new GetFreeEducationVideosRequest()),
                "gm-bitcoin" => await _videosService.GetVideos(new GetGmBitcoinVideosRequest()),
                _ => null
            };

            if (videos != null)
            {
                sitemapNodes.AddRange(videos.Select(video => $"free-content/{freeContentSection}/{video.Id}/{video.Title.UrlFriendly()}").Select(url => new SitemapNode {LastModified = DateTime.UtcNow, Priority = 0.6, Url = $"{baseUrl}/{url}", Frequency = SitemapFrequency.Weekly}));
            }
        });

        XmlSerializer serializer = new(typeof(List<SitemapNode>));

        var stringwriter = new StringWriter();
        serializer.Serialize(stringwriter, sitemapNodes);

        return stringwriter.ToString();
    }
}