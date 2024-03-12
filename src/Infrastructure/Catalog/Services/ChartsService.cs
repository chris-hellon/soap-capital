using MediatR;
using SoapCapital.Application.Catalog.Charts.Commands;
using SoapCapital.Application.Catalog.Charts.Dto;
using SoapCapital.Application.Catalog.Charts.Queries;
using SoapCapital.Application.Catalog.Interfaces;

namespace SoapCapital.Infrastructure.Catalog.Services;

public class ChartsService : IChartsService
{
    private readonly ISender _mediator;

    public ChartsService(ISender mediator)
    {
        _mediator = mediator;
    }

    public Task<IEnumerable<ChartDto>> GetCharts(GetChartsRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<ChartDto?> GetChart(GetChartRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<int> CreateChart(CreateChartRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<int> UpdateChart(UpdateChartRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task DeleteChart(int id)
    { 
        return _mediator.Send(new DeleteChartRequest(id));
    }
}