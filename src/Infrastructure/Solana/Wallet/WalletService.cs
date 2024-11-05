using SoapCapital.Application.Solana.Wallet;
using Solnet.Wallet;

namespace SoapCapital.Infrastructure.Solana.Wallet;

public class WalletService : IWalletService
{
    public void SetProvider(IWalletProvider provider)
    {
        SelectedProvider = provider;
        OnConnected?.Invoke();
    }

    public async Task<MessageResponse?>? SignMessage()
    {
        if (SelectedProvider != null) return await SelectedProvider.SignMessage();
        Console.WriteLine("No provider selected");
        return null;
    }

    public async Task<byte[]?>? SignTransaction(byte[] compiledMessage)
    {
        if (SelectedProvider != null) return await SelectedProvider.SignTransaction(compiledMessage);
        Console.WriteLine("No provider selected");
        return null;
    }

    public PublicKey? PublicKey => SelectedProvider?.PublicKey;
    public List<IWalletProvider> WalletProviders => WalletAdapters.Adapters;
    public IWalletProvider? SelectedProvider { get; set; }
   
    
    public event Action? OnConnected;
}