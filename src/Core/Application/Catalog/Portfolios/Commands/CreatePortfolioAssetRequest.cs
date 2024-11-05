using System.ComponentModel.DataAnnotations;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Portfolios.Commands;

public class CreatePortfolioAssetRequest : IRequest<int>
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
    
    public int PortfolioId { get; set; }
    
    public IEnumerable<CreatePortfolioAssetActionRequest> Actions { get; set; } = Array.Empty<CreatePortfolioAssetActionRequest>();
}

internal class CreatePortfolioAssetRequestHandler : IRequestHandler<CreatePortfolioAssetRequest, int>
{
    private readonly IDapperRepository<int> _repository;

    public CreatePortfolioAssetRequestHandler(IDapperRepository<int> repository)
    {
        _repository = repository;
    }
    
    public async Task<int> Handle(CreatePortfolioAssetRequest request, CancellationToken cancellationToken)
    {
        return await _repository.CreateSingleAsync("CreatePortfolioAsset", new
        {
            request.TokenName,
            request.TokenShortName,
            request.QuantityHeld,
            request.HexColor,
            request.PortfolioId
        });
    }
}