using MediatR;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Portfolios.Commands;
using SoapCapital.Application.Catalog.Portfolios.Dto;
using SoapCapital.Application.Catalog.Portfolios.Queries;

namespace SoapCapital.Infrastructure.Catalog.Services;

public class PortfoliosService : IPortfoliosService
{
    private readonly ISender _mediator;

    public PortfoliosService(ISender mediator)
    {
        _mediator = mediator;
    }

    public Task<IEnumerable<PortfolioDetailsDto>> GetPortfolios(GetPortfoliosRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<PortfolioDetailsDto?> GetPortfolio(GetPortfolioRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<int> CreatePortfolio(CreatePortfolioRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<int> CreatePortfolioAsset(CreatePortfolioAssetRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<int> CreatePortfolioAssetAction(CreatePortfolioAssetActionRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<int> UpdatePortfolio(UpdatePortfolioRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<int> UpdatePortfolioAsset(UpdatePortfolioAssetRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<int> UpdatePortfolioAssetAction(UpdatePortfolioAssetActionRequest request)
    {
        return _mediator.Send(request);
    }

    public Task DeletePortfolio(int id)
    {
        return _mediator.Send(new DeletePortfolioRequest(id));
    }
}