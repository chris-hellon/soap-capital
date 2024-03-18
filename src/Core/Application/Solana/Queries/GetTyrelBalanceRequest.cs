using System.Text;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Serilog;
using SoapCapital.Application.Common.Exceptions;
using SoapCapital.Application.DexScreener;
using SoapCapital.Application.Solana.Configuration;
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
    private readonly SolanaSettings _solanaSettings;
    private readonly IDexScreenerClient _dexScreenerClient;
    private readonly ILogger _logger;

    public GetTyrelBalanceRequestHandler(IOptions<SolanaSettings> solanaSettings, IDexScreenerClient dexScreenerClient, ILogger logger)
    {
        _dexScreenerClient = dexScreenerClient;
        _logger = logger;
        _solanaSettings = solanaSettings.Value;
    }

    public async Task<TyrelBalanceDto> Handle(GetTyrelBalanceRequest request, CancellationToken cancellationToken)
    {
        var tyrelBalanceDto = new TyrelBalanceDto();

        var currentMarketPriceRequest = Task.Run(() =>
        {
            var httpRequest = new HttpRequestMessage(HttpMethod.Get,
                $"latest/dex/pairs/solana/{_solanaSettings.TyrelContractAddress}");

            using StringContent jsonContent = new(
                JsonConvert.SerializeObject(request),
                Encoding.UTF8,
                "application/json");

            httpRequest.Content = jsonContent;

            using var response = _dexScreenerClient.SendAsync(httpRequest, cancellationToken);

            if (!response.Result.IsSuccessStatusCode) return 0;
            
            var responseContent = response.Result.Content.ReadAsStringAsync(cancellationToken);

            var obj = JObject.Parse(responseContent.Result);

            if (obj["pairs"] is not JArray {Count: > 0} pairs) return 0;
            if (pairs[0] is not JObject firstPair || firstPair["priceUsd"] == null) return 0;
            
            if (!decimal.TryParse(firstPair["priceUsd"]?.ToString(), out var marketPrice))
            {
                throw new CustomException("Unable to find current market price.");
            }

            return marketPrice;

        }, cancellationToken);

        var tyrelBalanceRequest = Task.Run(() =>
        {
            var client = ClientFactory.GetClient(_solanaSettings.RpcUrl);
            var tokenAccounts = client.GetTokenAccountsByOwner(ownerPubKey: request.PublicKey,
                tokenMintPubKey: _solanaSettings.TyrelTokenMintPubKey);

            if (tokenAccounts.WasSuccessful) return tokenAccounts;
            
            client = ClientFactory.GetClient(_solanaSettings.BackupRpcUrl);
            tokenAccounts = client.GetTokenAccountsByOwner(ownerPubKey: request.PublicKey,
                tokenMintPubKey: _solanaSettings.TyrelTokenMintPubKey);

            if (tokenAccounts.WasSuccessful) return tokenAccounts;
            
            client = ClientFactory.GetClient(Cluster.MainNet);
            tokenAccounts = client.GetTokenAccountsByOwner(ownerPubKey: request.PublicKey,
                tokenMintPubKey: _solanaSettings.TyrelTokenMintPubKey);

            if (!tokenAccounts.WasSuccessful)
                throw new CustomException(tokenAccounts.Reason, null, tokenAccounts.HttpStatusCode);

            return tokenAccounts;
        }, cancellationToken);

        await Task.WhenAll(currentMarketPriceRequest, tyrelBalanceRequest);

        var currentMarketPrice = currentMarketPriceRequest.Result;
        var tokenAccounts = tyrelBalanceRequest.Result;
        
        if (currentMarketPrice == 0)
            throw new CustomException("Unable to find current market price. Please check back later.");

        var amountToOwn = 1000 / currentMarketPrice;
        var dollarAmountToOwn = $"{(amountToOwn * currentMarketPrice):N0}";
        
        if (tokenAccounts.Result.Value.Count == 0)
            throw new NotFoundException(
                $"No Tyrel token founds in this wallet. You must have at least {amountToOwn:N0} $tyrel (${dollarAmountToOwn}) to sign up.");

        var tyrelAccount = tokenAccounts.Result.Value.FirstOrDefault(x => x.Account.Owner == _solanaSettings.TyrelAccountOwnerToken);

        if (tyrelAccount == null)
            throw new NotFoundException(
                $"No Tyrel token founds in this wallet. You must have at least {amountToOwn:N0} $tyrel (${dollarAmountToOwn}) to sign up.");

        var tyrelBalance = tyrelAccount.Account.Data.Parsed.Info.TokenAmount;

        if (tyrelBalance == null)
            return tyrelBalanceDto;

        if (tyrelBalance.AmountDecimal <= amountToOwn)
            throw new NotFoundException($"You must have at least {amountToOwn:N0} $tyrel (${dollarAmountToOwn}) to sign up.");
        
        _logger.Information("Public key: {RequestPublicKey} signed up. Balance reqired: {AmountToOwn}. Users Balance: {TyrelBalanceAmountDecimal}", request.PublicKey, amountToOwn, tyrelBalance.AmountDecimal);
        
        tyrelBalanceDto.Amount = tyrelBalance.AmountDecimal.ToString("N0");
        tyrelBalanceDto.Success = true;

        return tyrelBalanceDto;
    }
}