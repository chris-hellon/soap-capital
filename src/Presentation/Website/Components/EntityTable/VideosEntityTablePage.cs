using Microsoft.AspNetCore.Components;
using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Common.Extensions;

namespace SoapCapital.Website.Components.EntityTable;

[StreamRendering]
public class VideosEntityTablePage : ComponentBase
{
    protected bool Loading = true;
    protected virtual string Section => "free-content";
    protected virtual string? SubSection => null;

    private IEnumerable<EntityField<VideoDto>> AdditionalTableFields => SubSection != null ?
        [
            new EntityField<VideoDto>(video => video.Id, "View", video => $"/{Section}/{SubSection}/{video.Id}/{video.Title.UrlFriendly()}",
                Width: "100px")
        ]
        : [];

    public IEnumerable<VideoDto> TableEntities { get; set; } = Enumerable.Empty<VideoDto>();

    public List<EntityField<VideoDto>> TableFields => new List<EntityField<VideoDto>>()
    {
        new(video => video.Title, "Title"),
        new(video => video.Details, "Summary"),
        new(video => video.Date.ToShortDateString(), "Date", Width: "100px")
        
    }.Concat(AdditionalTableFields).ToList();
    
    public static bool SearchVideos(string? searchString, VideoDto video)
    {
        if (string.IsNullOrWhiteSpace(searchString))
            return true;

        return video.Title.Contains(searchString,
                   StringComparison.OrdinalIgnoreCase)
               || video.Details.Contains(searchString, StringComparison.OrdinalIgnoreCase)
               || video.Date.ToShortDateString()
                   .Contains(searchString,
                       StringComparison.OrdinalIgnoreCase);
    }

    protected override Task OnInitializedAsync()
    {
        Loading = false;
        return base.OnInitializedAsync();
    }
}