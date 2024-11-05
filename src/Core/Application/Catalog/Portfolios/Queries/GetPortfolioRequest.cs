using SoapCapital.Application.Catalog.Portfolios.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Portfolios.Queries;

public class GetPortfolioRequest : IRequest<PortfolioDetailsDto?>
{
    public int Id { get; set; }
    public bool ActiveOnly { get; set; }

    public GetPortfolioRequest(int id, bool activeOnly = true)
    {
        Id = id;
        ActiveOnly = activeOnly;
    }
}

internal class GetPortfolioRequestHandler : IRequestHandler<GetPortfolioRequest, PortfolioDetailsDto?>
{
    private readonly IDapperRepository<PortfolioDetailsDto> _repository;
    private readonly IDapperRepository<PortfolioAssetDetailsDto> _assetsRepository;
    private readonly IDapperRepository<PortfolioAssetActionDto> _assetActionsRepository;

    public GetPortfolioRequestHandler(IDapperRepository<PortfolioDetailsDto> repository,
        IDapperRepository<PortfolioAssetDetailsDto> assetsRepository,
        IDapperRepository<PortfolioAssetActionDto> assetActionsRepository)
    {
        _repository = repository;
        _assetsRepository = assetsRepository;
        _assetActionsRepository = assetActionsRepository;
    }

    public async Task<PortfolioDetailsDto?> Handle(GetPortfolioRequest query, CancellationToken cancellationToken)
    {
        var portfolioTask = _repository.GetSingleAsync("GetPortfolio", new
        {
            query.Id
        });
        var portfolioAssetsTask = _assetsRepository.GetAllAsync("GetPortfolioAssets", new
        {
            PortfolioId = query.Id,
            query.ActiveOnly
        });
        var portfolioAssetActionsTask = _assetActionsRepository.GetAllAsync("GetPortfolioAssetActions", new
        {
            PortfolioId = query.Id,
            query.ActiveOnly
        });

        await Task.WhenAll(portfolioTask, portfolioAssetsTask, portfolioAssetActionsTask);
        
        var portfolio = portfolioTask.Result;
        if (portfolio == null) return null;

        var portfolioAssetActions = portfolioAssetActionsTask.Result;
        
        portfolio.Assets = portfolioAssetsTask.Result;
        portfolio.Assets = portfolio.Assets.Select(x =>
        {
            x.Actions = portfolioAssetActions.Where(p => p.PortfolioAssetId == x.Id);
            return x;
        });

        return portfolio;

    }
}