using SoapCapital.Application.Catalog.Portfolios.Commands;
using SoapCapital.Application.Catalog.Portfolios.Dto;
using SoapCapital.Application.Catalog.Portfolios.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Catalog.Interfaces;

public interface IPortfoliosService : ITransientService
{
    Task<IEnumerable<PortfolioDetailsDto>> GetPortfolios(GetPortfoliosRequest request);
    Task<PortfolioDetailsDto?> GetPortfolio(GetPortfolioRequest request);
    Task<int> CreatePortfolio(CreatePortfolioRequest request);
    Task<int> CreatePortfolioAsset(CreatePortfolioAssetRequest request);
    Task<int> CreatePortfolioAssetAction(CreatePortfolioAssetActionRequest request);
    Task<int> UpdatePortfolio(UpdatePortfolioRequest request);
    Task<int> UpdatePortfolioAsset(UpdatePortfolioAssetRequest request);
    Task<int> UpdatePortfolioAssetAction(UpdatePortfolioAssetActionRequest request);
    Task DeletePortfolio(int id);
}