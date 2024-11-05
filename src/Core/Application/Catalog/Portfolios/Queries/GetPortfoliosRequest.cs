using SoapCapital.Application.Catalog.Portfolios.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Portfolios.Queries;

public class GetPortfoliosRequest : IRequest<IEnumerable<PortfolioDetailsDto>>
{
    public bool ActiveOnly { get; set; }

    public GetPortfoliosRequest(bool activeOnly = true)
    {
        ActiveOnly = activeOnly;
    }
}

internal class GetPortfoliosRequestHandler : IRequestHandler<GetPortfoliosRequest, IEnumerable<PortfolioDetailsDto>>
{
    private readonly IDapperRepository<PortfolioDetailsDto> _repository;

    public GetPortfoliosRequestHandler(IDapperRepository<PortfolioDetailsDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<PortfolioDetailsDto>> Handle(GetPortfoliosRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetPortfolios", query);
    }
}