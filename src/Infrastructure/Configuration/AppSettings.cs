namespace SoapCapital.Infrastructure.Configuration;

public class AppSettings
{
    public string Title { get; set; } = default!;

    public string Url { get; set; } = default!;

    public string LogoImageUrl { get; set; } = default!;

    public IList<SocialLink> SocialLinks { get; set; } = default!;

    public IList<NavigationLink> NavigationLinks { get; set; } = default!;

    public IList<NavigationLink> FooterLinks { get; set; } = default!;
}

public class SocialLink
{
    public string IconClass { get; set; } = default!;

    public string Url { get; set; } = default!;
    
    public bool? RequiresAuth { get; set; }
}

public class NavigationLink
{
    public string Title { get; set; } = default!;

    public string? Href { get; set; }

    public IList<NavigationLink>? Children { get; set; }

    public bool? RequiresAuth { get; set; }

    public bool? AdminOnly { get; set; }
    
    public string? Area { get; set; }
}