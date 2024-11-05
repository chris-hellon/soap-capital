namespace SoapCapital.Application.Catalog.Portfolios.Dto;

public class PortfolioDto
{
    public int Id { get; set; }
    public string Title { get; set; } = default!;
    public DateTime CreateDate { get; set; }
    public bool Active { get; set; }
}