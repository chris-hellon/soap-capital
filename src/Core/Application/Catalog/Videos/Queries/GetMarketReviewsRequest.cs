using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Queries;

public class GetMarketReviewsRequest : GetVideosRequest
{
    public GetMarketReviewsRequest()
    {
        MarketReview = true;
    }
}

internal class GetMarketReviewsRequestHandler : IRequestHandler<GetMarketReviewsRequest, IEnumerable<VideoDto>>
{
    private readonly IDapperRepository<VideoDto> _repository;

    public GetMarketReviewsRequestHandler(IDapperRepository<VideoDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<VideoDto>> Handle(GetMarketReviewsRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetVideos", query);
    }
}