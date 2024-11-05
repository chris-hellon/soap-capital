using System.ComponentModel.DataAnnotations;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Portfolios.Commands;

public class UpdatePortfolioAssetRequest : IRequest<int>
{
    [MaxLength(300)]
    [Required(AllowEmptyStrings = false)]
    public string TokenName { get; set; } = default!;
    
    [MaxLength(10)]
    [Required(AllowEmptyStrings = false)]
    public string TokenShortName { get; set; } = default!;
    
    [Required(AllowEmptyStrings = false)]
    public decimal? QuantityHeld {get; set; }
    
    [MaxLength(20)]
    [Required(AllowEmptyStrings = false)]
    public string HexColor { get; set; } = default!;
    public bool Active { get; set; } = true;
    public int PortfolioId { get; set; }
    public int? Id { get; set; }

    public IEnumerable<UpdatePortfolioAssetActionRequest> Actions { get; set; } = Array.Empty<UpdatePortfolioAssetActionRequest>();
}

internal class UpdatePortfolioAssetRequestHandler : IRequestHandler<UpdatePortfolioAssetRequest, int>
{
    private readonly IDapperRepository<int> _repository;

    public UpdatePortfolioAssetRequestHandler(IDapperRepository<int> repository)
    {
        _repository = repository;
    }


    public async Task<int> Handle(UpdatePortfolioAssetRequest request, CancellationToken cancellationToken)
    {
        return await _repository.CreateSingleAsync("UpdatePortfolioAsset", new
        {
            request.TokenName,
            request.TokenShortName,
            request.QuantityHeld,
            request.HexColor,
            request.Active,
            request.Id
        });
    }
}