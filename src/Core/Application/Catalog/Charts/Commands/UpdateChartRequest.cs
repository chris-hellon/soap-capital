using System.ComponentModel.DataAnnotations;
using SoapCapital.Application.Catalog.Charts.Dto;
using SoapCapital.Application.Common.Enums;
using SoapCapital.Application.FileStorage;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Charts.Commands;

public class UpdateChartRequest : IRequest<int>
{
    public int Id { get; set; }
    
    [Required(AllowEmptyStrings = false)]
    public string? Title { get; set; }

    public string? NavigateUrl { get; set; }
    
    public bool LiveTrading { get; set; }
    
    public string? ImageInBytes { get; set; }
    
    public string? ImageExtension { get; set; }
    
    [Display(Name = "Chart Image")]
    [Required]
    public string? ImageUrl { get; set; }
}

internal class UpdateChartRequestHandler : IRequestHandler<UpdateChartRequest, int>
{
    private readonly IDapperRepository<int> _repository;
    private readonly IFileStorageService _fileStorageService;

    public UpdateChartRequestHandler(IDapperRepository<int> repository, IFileStorageService file, IFileStorageService fileStorageService)
    {
        _repository = repository;
        _fileStorageService = fileStorageService;
    }

    public async Task<int> Handle(UpdateChartRequest request, CancellationToken cancellationToken)
    {
        var imageUrl = request.ImageInBytes != null ?
            await _fileStorageService.UploadAsync<ChartDto>(new FileUploadRequest()
                {
                    Data = request.ImageInBytes,
                    Extension = request.ImageExtension ?? string.Empty,
                    Name = $"{request.Title}_{Guid.NewGuid():N}"
                }, FileType.Image, "charts",
                cancellationToken) : request.ImageUrl;

        return await _repository.CreateSingleAsync("CreateChart", new
        {
            Id = request.Id,
            Title = request.Title,
            NavigateUrl = request.NavigateUrl,
            ImageUrl = imageUrl,
            LiveTrading = request.LiveTrading
        });
    }
}