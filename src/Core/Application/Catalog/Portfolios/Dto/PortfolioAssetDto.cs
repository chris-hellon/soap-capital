namespace SoapCapital.Application.Catalog.Portfolios.Dto;

public class PortfolioAssetDto
{
    public int Id { get; set; }
    public string TokenName { get; set; } = default!;
    public string TokenShortName { get; set; } = default!;
    public decimal QuantityHeld {get; set; }
    public string HexColor { get; set; } = default!;
    public int PortfolioId { get; set; }
}