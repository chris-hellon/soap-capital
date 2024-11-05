using SoapCapital.Application.Common.Interfaces;
using SoapCapital.Application.Solana.Dto;
using SoapCapital.Application.Solana.Queries;

namespace SoapCapital.Application.Solana;

public interface ISolanaService : ITransientService
{
    Task<TyrelBalanceDto> GetTyrelBalance(GetTyrelBalanceRequest request);
    Task<bool> GetSolanaPayStatus(GetSolanaPayStatusRequest request);
    public string? AuthKey { get; set; }    
    void SetAuthKey(Guid authKey);
}