using SoapCapital.Application.Catalog.Pages.Dto;
using SoapCapital.Application.Catalog.Pages.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Catalog.Interfaces;

public interface IPagesService : ITransientService
{
    Task<IEnumerable<PageSectionContentDto>> GetPageSectionContent(GetPageSectionContentRequest request);
}