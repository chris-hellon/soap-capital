using MediatR;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Pages.Dto;
using SoapCapital.Application.Catalog.Pages.Queries;

namespace SoapCapital.Infrastructure.Catalog.Services;

public class PagesService : IPagesService
{
    private readonly ISender _mediator;

    public PagesService(ISender mediator)
    {
        _mediator = mediator;
    }
    
    public Task<IEnumerable<PageSectionContentDto>> GetPageSectionContent(GetPageSectionContentRequest request)
    {
        return _mediator.Send(request);
    }
}