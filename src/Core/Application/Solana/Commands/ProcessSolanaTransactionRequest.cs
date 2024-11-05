using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using Solnet.Rpc;
using Solnet.Rpc.Models;
using Solnet.Wallet;
using Solnet.Wallet.Utilities;

namespace SoapCapital.Application.Solana.Commands;

public class ProcessSolanaTransactionRequest : IRequest<bool>
{
    public ulong Slot { get; }
    public string RecipientWallet { get; }
    public byte[] ReferenceBytes { get; }

    public ProcessSolanaTransactionRequest(ulong slot, string recipientWallet, byte[] referenceBytes)
    {
        Slot = slot;
        RecipientWallet = recipientWallet;
        ReferenceBytes = referenceBytes;
    }
}

public class ProcessSolanaTransactionHandler : IRequestHandler<ProcessSolanaTransactionRequest, bool>
{
    private readonly IRpcClient _rpcClient;
    private readonly ILogger<ProcessSolanaTransactionHandler> _logger;

    public ProcessSolanaTransactionHandler(IRpcClient rpcClient, ILogger<ProcessSolanaTransactionHandler> logger)
    {
        _rpcClient = rpcClient;
        _logger = logger;
    }

    public async Task<bool> Handle(ProcessSolanaTransactionRequest request, CancellationToken cancellationToken)
    {
        var signatures = await _rpcClient.GetSignaturesForAddressAsync(new PublicKey(request.RecipientWallet), 10);

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
            var transactionDetails = await _rpcClient.GetTransactionAsync(signatureInfo.Signature);

            if (!transactionDetails.WasSuccessful) continue;

            if (!TransactionHasTokenTransfer(transactionDetails.Result, request.RecipientWallet, request.ReferenceBytes)) continue;
            
            _logger.LogInformation("Matching transaction found in slot {Slot} for recipient: {RecipientWallet}", request.Slot, request.RecipientWallet);
            return true;
        }

        return false;
    }

    private static bool TransactionHasTokenTransfer(TransactionMetaInfo transaction, string recipientWallet, byte[] referenceBytes)
    {
        var referenceBase58 = Encoders.Base58.EncodeData(referenceBytes);
        var accounts = transaction.Transaction.Message.AccountKeys;

        // Look for instructions in the transaction involving the SPL token program
        return transaction.Transaction.Message.Instructions.Any(instruction =>
        {
            // // Check if the instruction is for the SPL Token program (token transfers)
            // if (instruction.ProgramIdIndex != "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") return false;

            // Verify if the instruction involves the recipient wallet and reference
            bool hasRecipient = instruction.Accounts.Any(index => accounts[index] == recipientWallet);
            bool hasReference = instruction.Accounts.Any(index => accounts[index] == referenceBase58);

            return hasRecipient && hasReference;
        });
    }
}