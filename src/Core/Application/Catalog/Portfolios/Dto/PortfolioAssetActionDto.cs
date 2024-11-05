namespace SoapCapital.Application.Catalog.Portfolios.Dto;

public class PortfolioAssetActionDto
{
    public int Id { get; set; }
    public DateTime Date { get; set; }
    public bool Buy { get; set; }
    public int PortfolioAssetId { get; set; }
}