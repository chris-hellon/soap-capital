using System.ComponentModel.DataAnnotations;
using System.Data;
using Dapper;
using SoapCapital.Application.Common.Exceptions;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Portfolios.Commands;

public class UpdatePortfolioRequest : IRequest<int>
{
    [MaxLength(300)]
    [Required(AllowEmptyStrings = false)]
    public string Title { get; set; }  = default!;
    
    public string? Description { get; set; }
    public bool Active { get; set; }
    public int Id { get; set; }

    public IList<UpdatePortfolioAssetRequest> Assets { get; set; } = new List<UpdatePortfolioAssetRequest>();
}

internal class UpdatePortfolioRequestHandler : IRequestHandler<UpdatePortfolioRequest, int>
{
    private readonly IDapperRepository<int> _repository;

    public UpdatePortfolioRequestHandler(IDapperRepository<int> repository)
    {
        _repository = repository;
    }
    
    public async Task<int> Handle(UpdatePortfolioRequest request, CancellationToken cancellationToken)
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
            
            dataRow["Id"] = asset.Id;
            dataRow["TokenName"] = asset.TokenName;
            dataRow["TokenShortName"] = asset.TokenShortName;
            dataRow["QuantityHeld"] = asset.QuantityHeld;
            dataRow["HexColor"] = asset.HexColor;
            dataRow["PortfolioId"] = asset.PortfolioId;

            dtAssets.Rows.Add(dataRow);
            
            // if (asset.Id.HasValue)
            // {
            //     await _repository.CreateSingleAsync("UpdatePortfolioAsset", new
            //     {
            //         asset.TokenName,
            //         asset.TokenShortName,
            //         asset.QuantityHeld,
            //         asset.HexColor,
            //         asset.Active,
            //         asset.Id
            //     });
            // }
            // else
            // {
            //     asset.Id = await _repository.CreateSingleAsync("CreatePortfolioAsset", new
            //     {
            //         asset.TokenName,
            //         asset.TokenShortName,
            //         asset.QuantityHeld,
            //         asset.HexColor,
            //         asset.PortfolioId
            //     });
            // }
            //
            // if (!asset.Actions.Any()) continue;
            //
            // foreach (var action in asset.Actions)
            // {
            //     action.PortfolioAssetId = asset.Id.Value;
            //
            //     if (action.Id.HasValue)
            //     {
            //         await _repository.CreateSingleAsync("UpdatePortfolioAssetAction", new
            //         {
            //             action.Date,
            //             action.Buy,
            //             action.Active,
            //             action.Id
            //         });
            //     }
            //     else
            //     {
            //         await _repository.CreateSingleAsync("CreatePortfolioAssetAction", new
            //         {
            //             action.Date,
            //             action.Buy,
            //             action.PortfolioAssetId
            //         });
            //     }
            // }
        }
        
        var portfolioId = await _repository.CreateSingleAsync("UpdatePortfolio", new
        {
            request.Title,
            request.Description,
            request.Active,
            request.Id,
            Assets = dtAssets.AsTableValuedParameter()
        });
        
        return portfolioId;
    }
}