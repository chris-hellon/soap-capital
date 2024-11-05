using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Portfolios.Commands;

public class CreatePortfolioAssetActionRequest : IRequest<int>
{
    public DateTime Date { get; set; }
    public bool Buy { get; set; }
    public int PortfolioAssetId { get; set; }

    public CreatePortfolioAssetActionRequest(DateTime date, bool buy, int portfolioAssetId)
    {
        Date = date;
        Buy = buy;
        PortfolioAssetId = portfolioAssetId;
    }
}

internal class CreatePortfolioAssetActionRequestHandler : IRequestHandler<CreatePortfolioAssetActionRequest, int>
{
    private readonly IDapperRepository<int> _repository;

    public CreatePortfolioAssetActionRequestHandler(IDapperRepository<int> repository)
    {
        _repository = repository;
    }
    
    public async Task<int> Handle(CreatePortfolioAssetActionRequest request, CancellationToken cancellationToken)
    {
        return await _repository.CreateSingleAsync("CreatePortfolioAssetAction", new
        {
            request.Date,
            request.Buy,
            request.PortfolioAssetId
        });
    }
}