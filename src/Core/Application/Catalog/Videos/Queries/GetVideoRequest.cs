using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Common.Exceptions;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Queries;

public class GetVideoRequest : IRequest<VideoDto>
{
    public int Id { get; set; }
    
    public GetVideoRequest(int id)
    {
        Id = id;
    }
}

internal class GetVideoRequestHandler : IRequestHandler<GetVideoRequest, VideoDto>
{
    private readonly IDapperRepository<VideoDto> _repository;

    public GetVideoRequestHandler(IDapperRepository<VideoDto> repository)
    {
        _repository = repository;
    }

    public async Task<VideoDto> Handle(GetVideoRequest query, CancellationToken cancellationToken)
    {
        var video = await _repository.GetSingleAsync("GetVideos", query);
        return video ?? throw new NotFoundException("Video not found.");
    }
}