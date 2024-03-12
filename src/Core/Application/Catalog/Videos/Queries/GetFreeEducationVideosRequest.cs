using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Queries;

public class GetFreeEducationVideosRequest : GetVideosRequest
{
    public GetFreeEducationVideosRequest()
    {
        FreeEducation = true;
    }
}

internal class GetFreeEducationVideosRequestHandler : IRequestHandler<GetFreeEducationVideosRequest, IEnumerable<VideoDto>>
{
    private readonly IDapperRepository<VideoDto> _repository;

    public GetFreeEducationVideosRequestHandler(IDapperRepository<VideoDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<VideoDto>> Handle(GetFreeEducationVideosRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetVideos", query);
    }
}