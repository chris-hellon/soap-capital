using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Queries;

public class GetGmBitcoinVideosRequest : GetVideosRequest
{
    public GetGmBitcoinVideosRequest()
    {
        FreeGmBitcoin = true;
    }
}

internal class GetGmBitcoinVideosRequestHandler : IRequestHandler<GetGmBitcoinVideosRequest, IEnumerable<VideoDto>>
{
    private readonly IDapperRepository<VideoDto> _repository;

    public GetGmBitcoinVideosRequestHandler(IDapperRepository<VideoDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<VideoDto>> Handle(GetGmBitcoinVideosRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetVideos", query);
    }
}