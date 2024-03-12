namespace SoapCapital.Application.Catalog.Pages.Dto;

public class PageSectionContentDto
{
    public int Id { get; set; }
    public int PageSectionId { get; set; }
    public string Content { get; set; } = string.Empty;
    public string? Header { get; set; }
}