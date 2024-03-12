using Microsoft.AspNetCore.Components;
using SoapCapital.Application.Catalog.Charts.Dto;
namespace SoapCapital.Website.Components.EntityTable;

[StreamRendering]
public class ChartsEntityTablePage : ComponentBase
{
    protected bool Loading = true;
    protected virtual bool ShowViewButton => false;

    private IEnumerable<EntityField<ChartDto>> AdditionalTableFields => ShowViewButton ?
        [
            new EntityField<ChartDto>(chart => chart.Id, "View", chart => chart.NavigateUrl ?? chart.ImageUrl,
                Width: "100px", Target: "_blank")
        ]
        : [];

    public IEnumerable<ChartDto> TableEntities { get; set; } = Enumerable.Empty<ChartDto>();

    public List<EntityField<ChartDto>> TableFields => new List<EntityField<ChartDto>>()
    {
        new(video => video.Title, "Title"),
        new(video => video.Date.ToShortDateString(), "Date", Width: "100px")
        
    }.Concat(AdditionalTableFields).ToList();
    
    public static bool SearchCharts(string? searchString, ChartDto video)
    {
        if (string.IsNullOrWhiteSpace(searchString))
            return true;

        return (video.Title != null && video.Title.Contains(searchString,
                                           StringComparison.OrdinalIgnoreCase)
                                       || video.Date.ToShortDateString()
                                           .Contains(searchString,
                                               StringComparison.OrdinalIgnoreCase));
    }

    protected override Task OnInitializedAsync()
    {
        Loading = false;
        return base.OnInitializedAsync();
    }
}