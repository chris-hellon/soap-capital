using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Portfolios.Commands;

public class UpdatePortfolioAssetActionRequest : IRequest<int>
{
    public DateTime Date { get; set; }
    public bool Buy { get; set; }
    public bool Active { get; set; } = true;
    public int PortfolioAssetId { get; set; }
    public int? Id { get; set; }
}

internal class UpdatePortfolioAssetActionRequestHandler : IRequestHandler<UpdatePortfolioAssetActionRequest, int>
{
    private readonly IDapperRepository<int> _repository;

    public UpdatePortfolioAssetActionRequestHandler(IDapperRepository<int> repository)
    {
        _repository = repository;
    }


    public async Task<int> Handle(UpdatePortfolioAssetActionRequest request, CancellationToken cancellationToken)
    {
        return await _repository.CreateSingleAsync("UpdatePortfolioAssetAction", new
        {
            request.Date,
            request.Buy,
            request.Active,
            request.Id
        });
    }
}