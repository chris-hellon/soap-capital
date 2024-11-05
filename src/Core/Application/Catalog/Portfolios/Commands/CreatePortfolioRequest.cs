using System.ComponentModel.DataAnnotations;
using System.Data;
using Dapper;
using SoapCapital.Application.Common.Exceptions;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Portfolios.Commands;

public class CreatePortfolioRequest : IRequest<int>
{
    [MaxLength(300)]
    [Required(AllowEmptyStrings = false)]
    public string Title { get; set; } = default!;
    
    public string? Description { get; set; }
    
    public IEnumerable<CreatePortfolioAssetRequest> Assets { get; set; } = Array.Empty<CreatePortfolioAssetRequest>();
}

internal class CreatePortfolioRequestHandler : IRequestHandler<CreatePortfolioRequest, int>
{
    private readonly IDapperRepository<int> _repository;

    public CreatePortfolioRequestHandler(IDapperRepository<int> repository)
    {
        _repository = repository;
    }
    
    public async Task<int> Handle(CreatePortfolioRequest request, CancellationToken cancellationToken)
    {
        if (!request.Assets.Any() || request.Assets.Any(x => string.IsNullOrEmpty(x.TokenName)))
            throw new CustomException("Please select some assets.");
        
        var dtAssets = new DataTable();
        dtAssets.Columns.Add("Id");
        dtAssets.Columns.Add("TokenName");
        dtAssets.Columns.Add("TokenShortName");
        dtAssets.Columns.Add("QuantityHeld");
        dtAssets.Columns.Add("HexColor");
        dtAssets.Columns.Add("CreateDate");
        dtAssets.Columns.Add("AmendDate");
        dtAssets.Columns.Add("Active");
        dtAssets.Columns.Add("PortfolioId");
        
        foreach (var asset in request.Assets)
        {
            if (string.IsNullOrEmpty(asset.TokenName))
                continue;
            
            var dataRow = dtAssets.NewRow();

            dataRow["TokenName"] = asset.TokenName;
            dataRow["TokenShortName"] = asset.TokenShortName;
            dataRow["QuantityHeld"] = asset.QuantityHeld;
            dataRow["HexColor"] = asset.HexColor;
            dataRow["PortfolioId"] = asset.PortfolioId;

            dtAssets.Rows.Add(dataRow);
        }

        var portfolioId = await _repository.CreateSingleAsync("CreatePortfolio", new
        {
            request.Title,
            request.Description,
            Assets = dtAssets.AsTableValuedParameter()
        });
        
        return portfolioId;
    }
}