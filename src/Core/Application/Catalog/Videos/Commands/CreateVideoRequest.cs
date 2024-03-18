using System.ComponentModel.DataAnnotations;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Commands;

public class CreateVideoRequest : IRequest<int>
{
    [Display(Name = "Video Url")]
    [Required]
    public string? VideoUrl { get; set; }

    [Required] public string? Title { get; set; }

    [Required] public string? Details { get; set; }

    [Display(Name = "Market Review")] public bool MarketReview { get; set; } = false;

    [Display(Name = "Resources")] public bool Resources { get; set; } = false;

    [Display(Name = "Gm Bitcoin")] public bool FreeGmBitcoin { get; set; } = false;

    [Display(Name = "Education")] public bool FreeEducation { get; set; } = false;

    [Display(Name = "Education")] public bool MembersEducation { get; set; } = false;

    [Display(Name = "Latest Review")] public bool TodaysReview { get; set; } = false;

    public bool IsUltraWide { get; set; } = true;
    
    public string? BaseUrl { get; set; }

    public CreateVideoRequest(string baseUrl)
    {
        BaseUrl = baseUrl;
    }

    public CreateVideoRequest()
    {
    }
}

internal class CreateVideoRequestHandler : IRequestHandler<CreateVideoRequest, int>
{
    private readonly IDapperRepository<int> _repository;

    public CreateVideoRequestHandler(IDapperRepository<int> repository)
    {
        _repository = repository;
    }

    public async Task<int> Handle(CreateVideoRequest request, CancellationToken cancellationToken)
    {
        return await _repository.CreateSingleAsync("CreateVideo", request);
    }
}