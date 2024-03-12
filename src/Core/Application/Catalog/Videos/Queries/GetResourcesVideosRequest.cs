using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Queries;

public class GetResourcesVideosRequest : GetVideosRequest
{
    public GetResourcesVideosRequest()
    {
        Resources = true;
    }
}

internal class GetResourcesVideosRequestHandler : IRequestHandler<GetResourcesVideosRequest, IEnumerable<VideoDto>>
{
    private readonly IDapperRepository<VideoDto> _repository;

    public GetResourcesVideosRequestHandler(IDapperRepository<VideoDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<VideoDto>> Handle(GetResourcesVideosRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetVideos", query);
    }
}