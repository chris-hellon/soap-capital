using SoapCapital.Application.Catalog.Charts.Commands;
using SoapCapital.Application.Catalog.Charts.Dto;
using SoapCapital.Application.Catalog.Charts.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Catalog.Interfaces;

public interface IChartsService : ITransientService
{
    Task<IEnumerable<ChartDto>> GetCharts(GetChartsRequest request);

    Task<ChartDto?> GetChart(GetChartRequest request);

    Task<int> CreateChart(CreateChartRequest request);

    Task<int> UpdateChart(UpdateChartRequest request);

    Task DeleteChart(int id);
}