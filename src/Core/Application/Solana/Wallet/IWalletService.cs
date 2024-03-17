using SoapCapital.Application.Common.Interfaces;
using Solnet.Wallet;

namespace SoapCapital.Application.Solana.Wallet;

public interface IWalletService : IScopedService
{
    PublicKey? PublicKey { get; }

    
    List<IWalletProvider> WalletProviders { get; }

    IWalletProvider? SelectedProvider { get; set; }
        
    void SetProvider(IWalletProvider provider);

    Task<byte[]?>? SignMessage(byte[] compiledMessage);

    Task<byte[]?>? SignTransaction(byte[] compiledMessage);
    
    public event Action OnConnected;
}