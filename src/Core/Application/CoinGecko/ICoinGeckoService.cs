using SoapCapital.Application.CoinGecko.Dto;
using SoapCapital.Application.CoinGecko.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.CoinGecko;

public interface ICoinGeckoService : ITransientService
{
    Task<TokenPriceDataDto> GetCoinMarketChart(GetCoinMarketChartRequest request);
}