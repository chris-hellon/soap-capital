using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Common.Exceptions;
using SoapCapital.Application.Solana.Dto;
using Solnet.Rpc;

namespace SoapCapital.Application.Solana.Queries;

public class GetTyrelBalanceRequest : IRequest<TyrelBalanceDto>
{
    public string? PublicKey { get; set; }

    public GetTyrelBalanceRequest(string? publicKey)
    {
        PublicKey = publicKey;
    }
}

internal class GetTyrelBalanceRequestHandler : IRequestHandler<GetTyrelBalanceRequest, TyrelBalanceDto>
{
    private IPackagesService _packagesService;

    public GetTyrelBalanceRequestHandler(IPackagesService packagesService)
    {
        _packagesService = packagesService;
    }

    public async Task<TyrelBalanceDto> Handle(GetTyrelBalanceRequest request, CancellationToken cancellationToken)
    {
        var tyrelBalanceDto = new TyrelBalanceDto();
        
        var tyrelPackage = await _packagesService.GetPackage(6);

        var amountToOwn = 420000M;
        if (tyrelPackage != null)
            amountToOwn = tyrelPackage.Price;
        
        var client = ClientFactory.GetClient(Cluster.MainNet);
        var tokenAccounts = await client.GetTokenAccountsByOwnerAsync(ownerPubKey: request.PublicKey,
            tokenMintPubKey: "6tHCkrCTyqZQfyG9B73HFKcjixQSi3ezWW5E4sfc7UxT");

        if (!tokenAccounts.WasSuccessful)
            throw new CustomException(tokenAccounts.Reason, tokenAccounts.ErrorData.Logs.ToList(), tokenAccounts.HttpStatusCode);

        if (tokenAccounts.Result.Value.Count == 0)
            throw new NotFoundException($"No Tyrel token founds in this wallet. You must have at least {amountToOwn:N0} $tyrel to sign up.");

        var tyrelAccount = tokenAccounts.Result.Value.FirstOrDefault(x => x.Account.Owner == "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
        
        if (tyrelAccount == null)
            throw new NotFoundException($"No Tyrel token founds in this wallet. You must have at least {amountToOwn:N0} $tyrel to sign up.");

        var tyrelBalance = tyrelAccount.Account.Data.Parsed.Info.TokenAmount;

        if (tyrelBalance == null)
            return tyrelBalanceDto;

        if (tyrelBalance.AmountDecimal <= amountToOwn)
            throw new NotFoundException($"You must have at least {amountToOwn:N0} $tyrel to sign up.");
        
        tyrelBalanceDto.Amount = tyrelBalance.AmountDecimal.ToString("N0");
        tyrelBalanceDto.Success = true;
        
        return tyrelBalanceDto;
    }
}