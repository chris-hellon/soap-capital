using SoapCapital.Application.Catalog.Charts.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Charts.Queries;

public class GetChartsRequest : IRequest<IEnumerable<ChartDto>>
{
    public bool? LiveTrading { get; set; }

    public int CountToReturn { get; set; }

    public GetChartsRequest()
    {

    }

    public GetChartsRequest(bool? liveTrading, int? countToReturn)
    {
        LiveTrading = liveTrading;
        CountToReturn = countToReturn ?? 99999;
    }

    public GetChartsRequest(int countToReturn)
    {
        LiveTrading = false;
        CountToReturn = countToReturn;
    }
}

public class GetChartsRequestHandler : IRequestHandler<GetChartsRequest, IEnumerable<ChartDto>>
{
    private readonly IDapperRepository<ChartDto> _repository;

    public GetChartsRequestHandler(IDapperRepository<ChartDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<ChartDto>> Handle(GetChartsRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetCharts", query);
    }
}