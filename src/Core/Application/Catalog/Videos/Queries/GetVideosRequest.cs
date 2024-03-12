using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Queries;

public class GetVideosRequest : IRequest<IEnumerable<VideoDto>>
{
    public bool? TodaysReview { get; set; }

    public bool? MarketReview { get; set; }

    public bool? Resources { get; set; }

    public bool? MembersEducation { get; set; }

    public bool? FreeGmBitcoin { get; set; }

    public bool? FreeEducation { get; set; }

    public GetVideosRequest()
    {
    }
}

internal class GetVideosRequestHandler : IRequestHandler<GetVideosRequest, IEnumerable<VideoDto>>
{
    private readonly IDapperRepository<VideoDto> _repository;

    public GetVideosRequestHandler(IDapperRepository<VideoDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<VideoDto>> Handle(GetVideosRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetVideos", query);
    }
}