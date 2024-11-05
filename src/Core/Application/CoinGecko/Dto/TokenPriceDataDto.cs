namespace SoapCapital.Application.CoinGecko.Dto;

public class TokenPriceDataDto
{
    public List<PricePoint> Prices { get; set; } = [];
    private List<PricePoint> _filteredPrices;

    public List<PricePoint> FilteredPrices
    {
        get => _filteredPrices ?? Prices;
        set => _filteredPrices = value;
    }

    public decimal? LivePrice { get; set; }
}

public class PricePoint
{
    public DateTime Timestamp { get; set; }
    public decimal Price { get; set; }
}

public class TokenPriceDataDtoRaw
{
    public List<List<decimal>> Prices { get; set; } = new();
    public List<List<decimal>> MarketCaps { get; set; }= new();
    public List<List<decimal>> TotalVolumes { get; set; }= new();
}