using SoapCapital.Application.Catalog.Charts.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Charts.Queries;

public class GetChartRequest : IRequest<ChartDto?>
{
    public bool? LiveTrading { get; set; }

    public int? Id { get; set; }
    
    private int CountToReturn { get; set; }

    public GetChartRequest()
    {

    }

    public GetChartRequest(int? id, bool? liveTrading)
    {
        LiveTrading = liveTrading;
        Id = id;
        CountToReturn = 1;
    }
}

public class GetChartRequestHandler : IRequestHandler<GetChartRequest, ChartDto?>
{
    private readonly IDapperRepository<ChartDto> _repository;

    public GetChartRequestHandler(IDapperRepository<ChartDto> repository)
    {
        _repository = repository;
    }

    public async Task<ChartDto?> Handle(GetChartRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetSingleAsync("GetCharts", query);
    }
}