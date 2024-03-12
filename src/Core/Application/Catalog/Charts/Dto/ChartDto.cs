namespace SoapCapital.Application.Catalog.Charts.Dto;

public class ChartDto
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? NavigateUrl { get; set; }
    public string ImageUrl { get; set; } = default!;
    public DateTime Date { get; set; }
    public double WowDelay { get; set; } = 0.1;
    public bool Admin { get; set; }
    public string CssClass { get; set; } = "col-lg-4 col-md-12 col-sm-12";

    public ChartDto()
    {
    }

    public ChartDto(string title, string imageUrl, DateTime date, string? navigateUrl = null)
    {
        Title = title;
        Date = date;
        NavigateUrl = navigateUrl;
        ImageUrl = imageUrl;
    }
}

