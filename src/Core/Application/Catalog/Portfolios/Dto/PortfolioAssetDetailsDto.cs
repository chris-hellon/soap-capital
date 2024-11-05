using SoapCapital.Application.Binance;
using SoapCapital.Application.CoinGecko.Dto;
using SoapCapital.Application.Common.Extensions;

namespace SoapCapital.Application.Catalog.Portfolios.Dto;

public class PortfolioAssetDetailsDto
{
    public int Id { get; set; }
    public string TokenName { get; set; } = default!;
    public string TokenShortName { get; set; } = default!;
    public decimal QuantityHeld {get; set; }
    public string QuantityHeldFormatted => $"{QuantityHeld:n2}";
    public string HexColor { get; set; } = default!;
    public int PortfolioId { get; set; }
    public TokenPriceDataDto? PriceData { get; set; }
    public string CurrentPriceFormatted => PriceData != null ? $"${PriceData.LivePrice:n2}" : "$--,--.--";
    public string CurrentValueFormatted => PriceData != null ? $"${PriceData.LivePrice * QuantityHeld:n2}" : "$--,--.--";
    public decimal CurrentPrice => PriceData is {LivePrice: not null} ? PriceData.LivePrice.Value : 0m;
    public decimal CurrentValue => PriceData is {LivePrice: not null} ? PriceData.LivePrice.Value * QuantityHeld : 0m;
    private decimal YesterdaysValue => PriceData != null ? PriceData.Prices.SecondToLast().Price * QuantityHeld : 0m;
    public decimal ValueDifference => CurrentValue - YesterdaysValue;
    public string ValueDifferenceFormatted => PriceData != null ? $"${ValueDifference:n2}" : "$--,--.--";
    public decimal InitialValue => PriceData?.FilteredPrices.FirstOrDefault()?.Price * QuantityHeld ?? 0m;
    private decimal ROIPercentage
    {
        get
        {
            if (InitialValue == 0) return 0m;

            return (CurrentValue - InitialValue) / InitialValue * 100;
        }
    }
    public string ROIFormatted => $"{ROIPercentage:n2}%";
    public bool PriceSet { get; set; }
    public decimal PortfolioPercentage { get; set; } = 0M;
    
    public IEnumerable<PortfolioAssetActionDto> Actions { get; set; } = Array.Empty<PortfolioAssetActionDto>();
}