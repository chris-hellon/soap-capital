using System.Net.WebSockets;
using MediatR;
using Microsoft.Extensions.Logging;
using SoapCapital.Application.Solana.Commands;
using Solnet.Rpc;
using Solnet.Rpc.Core.Sockets;
using Solnet.Rpc.Messages;
using Solnet.Rpc.Models;
using Solnet.Rpc.Types;
using Solnet.Wallet.Utilities;

namespace SoapCapital.Infrastructure.Solana;

public class PaymentConfirmedEventArgs : EventArgs
{
    public bool IsPaymentConfirmed { get; }

    public PaymentConfirmedEventArgs(bool isPaymentConfirmed)
    {
        IsPaymentConfirmed = isPaymentConfirmed;
    }
}

public class SolanaWebSocketListener
{
    private readonly IStreamingRpcClient _wsClient;
    private readonly IMediator _mediator;
    private readonly ILogger<SolanaWebSocketListener> _logger;
    private SubscriptionState? _subscriptionState;

    public event EventHandler<PaymentConfirmedEventArgs>? PaymentConfirmed;

    public SolanaWebSocketListener(IStreamingRpcClient wsClient, IMediator mediator,
        ILogger<SolanaWebSocketListener> logger)
    {
        _wsClient = wsClient;
        _mediator = mediator;
        _logger = logger;
    }

    public async Task StartListeningAsync(string recipientWallet, string solanaPayReferenceId)
    {
        await ConnectWebSocketAsync();

        // Subscribe to recipient wallet account info and store the subscription state
        _subscriptionState = await SubscribeToSplTokenProgramAsync(recipientWallet, solanaPayReferenceId);
    }

    private async Task ConnectWebSocketAsync()
    {
        if (_wsClient.State != WebSocketState.Open)
        {
            await _wsClient.ConnectAsync();
            _logger.LogInformation("Connected to Solana WebSocket");
        }
    }

    private async Task<SubscriptionState> SubscribeToSplTokenProgramAsync(string recipientWallet, string solanaPayReferenceId)
    {
        _logger.LogInformation("Starting SPL Token Program subscription for recipient wallet: {RecipientWallet}",
            recipientWallet);
        
        var memCmpList = new List<MemCmp>
        {
            new MemCmp
            {
                Offset = 32,
                Bytes = recipientWallet
            }
        };

        // Subscribe to SPL Token Program with recipient filter
        var subscription = await _wsClient.SubscribeProgramAsync(
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            async (subscription, accountInfo) => TokenTransferCallback(subscription, accountInfo, recipientWallet, solanaPayReferenceId),
            Commitment.Finalized,
            dataSize: null, // You can specify size if needed, or leave null
            memCmpList: memCmpList
        );
        
        if (subscription.State == SubscriptionStatus.Subscribed)
        {
            _logger.LogInformation("SPL Token Program subscription active for recipient wallet: {RecipientWallet}",
                recipientWallet);
        }
        else
        {
            _logger.LogWarning("SPL Token Program subscription failed for recipient wallet: {RecipientWallet}",
                recipientWallet);
        }

        return subscription;
    }
    
    private void TokenTransferCallback(SubscriptionState subscription, ResponseValue<AccountKeyPair> accountInfo, string recipientWallet, string solanaPayReferenceId)
    {
        _logger.LogInformation("Token transfer callback triggered for account: {AccountKey}", accountInfo.Value.PublicKey);

        try
        {
            // Decode the account data directly from the callback to validate token transfer
            var accountData = Convert.FromBase64String(accountInfo.Value.Account.Data[0]);

            // Validate the decoded account data for recipient and reference bytes
            if (ValidateTokenTransfer(accountData, recipientWallet, solanaPayReferenceId))
            {
                _logger.LogInformation("Valid token transfer detected for recipient wallet: {RecipientWallet}", recipientWallet);
                OnPaymentConfirmed(new PaymentConfirmedEventArgs(true));
            }
            else
            {
                _logger.LogInformation("No matching token transfer found for recipient wallet: {RecipientWallet}", recipientWallet);
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing token transfer callback for account: {AccountKey}", accountInfo.Value.PublicKey);
        }
    }

    private bool ValidateTokenTransfer(byte[] accountData, string recipientWallet, string solanaPayReferenceId)
    {
        _logger.LogInformation("Account Data (Hex): {AccountDataHex}", BitConverter.ToString(accountData).Replace("-", ""));
        
        var publicKeys = ExtractPublicKeys(accountData);

        var decodedRecipient = publicKeys.FirstOrDefault(x => x == recipientWallet);
        var decodedReference = publicKeys.FirstOrDefault(x => x == solanaPayReferenceId);
        
        if (string.IsNullOrEmpty(decodedRecipient) || string.IsNullOrEmpty(decodedReference))
        {
            _logger.LogInformation("Recipient does not match");
            return false;
        }
        
        if (decodedReference != solanaPayReferenceId)
        {
            _logger.LogInformation("Solana Pay Refrence does not match");
            return false;
        }

        // Optional: Check token amount if required (at offset 64)
        var tokenAmount = BitConverter.ToUInt64(accountData[64..72], 0);
        _logger.LogInformation("Token amount detected: {TokenAmount}", tokenAmount);

        return tokenAmount > 0; // Return true if transfer is valid
    }
    
    private List<string> ExtractPublicKeys(byte[] accountData)
    {
        var publicKeys = new List<string>();

        // Each public key is 32 bytes long
        const int keyLength = 32;

        // Calculate how many complete keys are in the accountData
        int numberOfKeys = accountData.Length / keyLength;

        for (int i = 0; i < numberOfKeys; i++)
        {
            // Extract the key from the byte array
            var keyBytes = accountData.Skip(i * keyLength).Take(keyLength).ToArray();

            // Decode the key from Base58
            var decodedKey = Encoders.Base58.EncodeData(keyBytes);
            publicKeys.Add(decodedKey);
        }

        return publicKeys;
    }
    
    private void OnPaymentConfirmed(PaymentConfirmedEventArgs e)
    {
        PaymentConfirmed?.Invoke(this, e);
    }

    public async Task StopListeningAsync()
    {
        if (_subscriptionState != null)
        {
            await _wsClient.UnsubscribeAsync(_subscriptionState);
            _logger.LogInformation("Unsubscribed from account updates");
        }

        if (_wsClient.State == WebSocketState.Open)
        {
            await _wsClient.DisconnectAsync();
            _logger.LogInformation("Disconnected from Solana WebSocket");
        }
    }
}