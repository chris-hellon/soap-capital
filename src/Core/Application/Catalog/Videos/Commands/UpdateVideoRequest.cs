using System.ComponentModel.DataAnnotations;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Commands;

public class UpdateVideoRequest : IRequest<int>
{
    public int Id { get; set; }

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

    public UpdateVideoRequest()
    {
    }
}

internal class UpdateVideoRequestHandler : IRequestHandler<UpdateVideoRequest, int>
{
    private readonly IDapperRepository<int> _repository;
    
    public UpdateVideoRequestHandler(IDapperRepository<int> repository)
    {
        _repository = repository;
    }

    public async Task<int> Handle(UpdateVideoRequest request, CancellationToken cancellationToken)
    {
        return await _repository.CreateSingleAsync("UpdateVideo", request);
    }
}