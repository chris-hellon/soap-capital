using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Queries;

public class GetLatestReviewRequest : GetVideosRequest
{
    public GetLatestReviewRequest()
    {
        TodaysReview = true;
    }
}

internal class GetLatestReviewRequestHandler : IRequestHandler<GetLatestReviewRequest, IEnumerable<VideoDto>>
{
    private readonly IDapperRepository<VideoDto> _repository;

    public GetLatestReviewRequestHandler(IDapperRepository<VideoDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<VideoDto>> Handle(GetLatestReviewRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetVideos", query);
    }
}