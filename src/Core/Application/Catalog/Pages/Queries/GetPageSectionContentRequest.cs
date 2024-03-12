using SoapCapital.Application.Catalog.Pages.Dto;
using SoapCapital.Application.Common.Attributes;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Pages.Queries;

public class GetPageSectionContentRequest : IRequest<IEnumerable<PageSectionContentDto>>
{
    public int? PageSectionId { get; set; }

    [DapperIdListParameter]
    public List<int>? PageSectionIdList { get; set; }

    public GetPageSectionContentRequest()
    {
    }

    public GetPageSectionContentRequest(int pageSectionId)
    {
        PageSectionId = pageSectionId;
    }

    public GetPageSectionContentRequest(List<int> pageSectionIdList)
    {
        PageSectionIdList = pageSectionIdList;
    }
}

public class GetPageSectionContentRequestHandler : IRequestHandler<GetPageSectionContentRequest, IEnumerable<PageSectionContentDto>>
{
    private readonly IDapperRepository<PageSectionContentDto> _repository;

    public GetPageSectionContentRequestHandler(IDapperRepository<PageSectionContentDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<PageSectionContentDto>> Handle(GetPageSectionContentRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetPageSectionContent", query);
    }
}
