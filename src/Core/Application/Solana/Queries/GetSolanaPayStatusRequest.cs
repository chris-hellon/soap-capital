using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using SoapCapital.Application.Solana.Configuration;
using Solnet.Rpc;
using Solnet.Rpc.Models;
using Solnet.Rpc.Types;
using Solnet.Wallet;
using Solnet.Wallet.Utilities;

namespace SoapCapital.Application.Solana.Queries;

public class GetSolanaPayStatusRequest : IRequest<bool>
{
    public GetSolanaPayStatusRequest(string solanaPayReferenceId, string recipientWalletPublicKey, int orderId)
    {
        SolanaPayReferenceId = solanaPayReferenceId;
        RecipientWalletPublicKey = recipientWalletPublicKey;
        OrderId = orderId;
    }

    public string SolanaPayReferenceId { get; set; }
    public string RecipientWalletPublicKey { get; set; }
    public int OrderId { get; set; }
}

internal class GetSolanaPayStatusRequestHandler : IRequestHandler<GetSolanaPayStatusRequest, bool>
{
    private readonly ILogger<GetSolanaPayStatusRequestHandler> _logger;
    private readonly IRpcClient _rpcClient;

    public GetSolanaPayStatusRequestHandler(IOptions<SolanaSettings> solanaSettings, ILogger<GetSolanaPayStatusRequestHandler> logger)
    {
        _logger = logger;
        _rpcClient = ClientFactory.GetClient(solanaSettings.Value.RpcUrl, _logger);
    }

    public async Task<bool> Handle(GetSolanaPayStatusRequest request, CancellationToken cancellationToken)
    {
        var referenceBytes = Encoders.Base58.DecodeData(request.SolanaPayReferenceId);
        var signatures = await _rpcClient.GetSignaturesForAddressAsync(new PublicKey(request.RecipientWalletPublicKey), 10);

        var rawJson = signatures.RawRpcResponse;
        var parsedJson = JObject.Parse(rawJson);

        var signaturesParsed = parsedJson["result"]?.ToObject<List<SignatureStatusInfo>>();

        if (signaturesParsed is not {Count: > 0})
        {
            _logger.LogError("No signatures found or unable to parse the response");
            return false;
        }

        foreach (var signatureInfo in signaturesParsed)
        {
            var transactionDetails = await _rpcClient.GetTransactionAsync(signatureInfo.Signature, Commitment.Finalized);

            if (!transactionDetails.WasSuccessful) continue;

            var transaction = transactionDetails.Result;

            _logger.LogInformation("Raw RPC Response: {Response}", transactionDetails.RawRpcResponse);
            
            if (!TransactionHasReference(transaction, referenceBytes))
                continue;
            
            _logger.LogInformation("Transaction found with reference ID: {RequestSolanaPayReferenceId}", request.SolanaPayReferenceId);
            return true;
        }

        return false;
    }

    private static bool TransactionHasReference(TransactionMetaInfo transaction, byte[] referenceBytes)
    {
        var referenceBase58 = Encoders.Base58.EncodeData(referenceBytes);

        var accounts = transaction.Transaction.Message.AccountKeys;

        foreach (var instruction in transaction.Transaction.Message.Instructions)
        {
            if (instruction.Accounts.Select(accountIndex => accounts[accountIndex]).Any(accountPublicKey => accountPublicKey == referenceBase58))
            {
                return true;
            }
        }

        return false;
    }
}