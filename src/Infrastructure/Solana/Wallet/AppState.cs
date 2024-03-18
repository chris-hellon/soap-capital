using SoapCapital.Application.Common.Interfaces;
using Solnet.Wallet;

namespace SoapCapital.Infrastructure.Solana.Wallet;

public class AppState : IScopedService
{
    public string? SelectedNetwork { get; private set; }
    public void SetNetwork(string network)
    {
        SelectedNetwork = network;
        NotifyStateChanged();
    }

    public string? WalletAddress => WalletPublicKey?.Key;
    public PublicKey? WalletPublicKey { get; private set; }
    public void SetAddress(string address)
    {
        WalletPublicKey = new PublicKey(address);
        NotifyStateChanged();
    }


    public event Action? OnChange;
    private void NotifyStateChanged() => OnChange?.Invoke();
}