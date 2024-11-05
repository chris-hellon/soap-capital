using MediatR;
using SoapCapital.Application.CoinGecko;
using SoapCapital.Application.CoinGecko.Dto;
using SoapCapital.Application.CoinGecko.Queries;

namespace SoapCapital.Infrastructure.CoinGecko;

public class CoinGeckoService : ICoinGeckoService
{
    private readonly ISender _mediator;

    public CoinGeckoService(ISender mediator)
    {
        _mediator = mediator;
    }

    public Task<TokenPriceDataDto> GetCoinMarketChart(GetCoinMarketChartRequest request)
    {
        return _mediator.Send(request);
    }
}