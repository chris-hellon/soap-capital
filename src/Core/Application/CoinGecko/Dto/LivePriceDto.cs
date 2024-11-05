namespace SoapCapital.Application.CoinGecko.Dto;

public class LivePriceDto
{
    public Dictionary<string, Dictionary<string, decimal>> Prices { get; set; } = new();
}