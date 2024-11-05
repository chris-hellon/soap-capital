namespace SoapCapital.Application.Catalog.Portfolios.Dto;

public class PortfolioDetailsDto
{
    public int Id { get; set; }
    public string Title { get; set; } = default!;
    public string? Description { get; set; }
    public bool Active { get; set; }
    public DateTime CreateDate { get; set; }

    public IEnumerable<PortfolioAssetDetailsDto> Assets { get; set; } = Array.Empty<PortfolioAssetDetailsDto>();
}