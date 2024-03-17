using MediatR;
using SoapCapital.Application.Solana;
using SoapCapital.Application.Solana.Dto;
using SoapCapital.Application.Solana.Queries;

namespace SoapCapital.Infrastructure.Solana;

public class SolanaService : ISolanaService
{
    private readonly ISender _mediator;

    public SolanaService(ISender mediator)
    {
        _mediator = mediator;
    }

    public Task<TyrelBalanceDto> GetTyrelBalance(GetTyrelBalanceRequest request)
    {
        return _mediator.Send(request);
    }
    
    public string? AuthKey { get; set; }    
    
    public void SetAuthKey(Guid authKey)
    {
        AuthKey = authKey.ToString();
    }
}