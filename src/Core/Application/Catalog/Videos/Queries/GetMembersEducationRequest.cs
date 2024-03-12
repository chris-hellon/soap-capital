using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Queries;

public class GetMembersEducationRequest : GetVideosRequest
{
    public GetMembersEducationRequest()
    {
        MembersEducation = true;
    }
}

internal class GetMembersEducationRequestHandler : IRequestHandler<GetMembersEducationRequest, IEnumerable<VideoDto>>
{
    private readonly IDapperRepository<VideoDto> _repository;

    public GetMembersEducationRequestHandler(IDapperRepository<VideoDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<VideoDto>> Handle(GetMembersEducationRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetVideos", query);
    }
}