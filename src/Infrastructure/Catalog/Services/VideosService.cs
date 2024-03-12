using MediatR;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Videos.Commands;
using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Catalog.Videos.Queries;

namespace SoapCapital.Infrastructure.Catalog.Services;

public class VideosService : IVideosService
{
    private readonly ISender _mediator;

    public VideosService(ISender mediator)
    {
        _mediator = mediator;
    }
    
    public Task<IEnumerable<VideoDto>> GetVideos(GetVideosRequest request)
    {
        return _mediator.Send(request);
    }

    public Task<VideoDto> GetVideo(int id)
    {
        return _mediator.Send(new GetVideoRequest(id));
    }

    public Task<int> CreateVideo(CreateVideoRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<int> UpdateVideo(UpdateVideoRequest request)
    {
        return _mediator.Send(request);
    }

    public Task DeleteVideo(int id)
    {
        return _mediator.Send(new DeleteVideoRequest(id));
    }
}