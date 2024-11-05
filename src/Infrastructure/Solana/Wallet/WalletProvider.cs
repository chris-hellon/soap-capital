using Microsoft.JSInterop;
using SoapCapital.Application.Solana.Wallet;
using Solnet.Wallet;

namespace SoapCapital.Infrastructure.Solana.Wallet;

public class WalletProvider : IWalletProvider
{
    private IJSRuntime? _jsRuntime;
    private IJSObjectReference? _wallet;
    private IJSObjectReference? _adapter;
    private EventInterop? Interop { get; set; }

    public WalletProvider(string name, string url, string iconUrl)
    {
        Name = name;
        Url = url;
        IconUrl = iconUrl;
    }

    private async Task HandleEvent(EventArgs args)
    {
        var publicKey = await GetWalletPublicKey();
        if (string.IsNullOrEmpty(publicKey))
        {
            Console.WriteLine($"publicKey is null");
            return;
        }

        PublicKey = new PublicKey(publicKey);
        OnConnected?.Invoke();
    }

    public async Task Load(IJSRuntime? jsRuntime)
    {
        if (jsRuntime == null)
        {
            Console.WriteLine("JS Runtime is null");
            return;
        }

        _jsRuntime = jsRuntime;
        const string funcToExecute = "getWalletAdapterClass";
        _wallet = await _jsRuntime.InvokeAsync<IJSObjectReference>($"solanawallet.{funcToExecute}", Name,
            "./solanawallet.js");
        if (_wallet == null)
        {
            Console.WriteLine("wallet is null");
            return;
        }

        Interop = new EventInterop(jsRuntime);
        await Interop.SetupEventCallback(HandleEvent, _wallet);
        _adapter = await _wallet.InvokeAsync<IJSObjectReference>("GetAdapter");
        if (_adapter == null)
        {
            Console.WriteLine("wallet adapter is null");
        }
    }

    public async Task Connect()
    {
        try
        {
            if (_adapter == null)
            {
                Console.WriteLine("wallet adapter is null");
                return;
            }

            await _adapter.InvokeVoidAsync("connect");
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }

    public async Task Disconnect()
    {
        if (_adapter == null)
        {
            Console.WriteLine("wallet adapter is null");
            return;
        }

        await _adapter.InvokeVoidAsync("disconnect");
    }

    public async Task<MessageResponse?> SignMessage()
    {
        if (_wallet == null)
        {
            Console.WriteLine("wallet adapter is null");
            return null;
        }

        var signature = await _wallet.InvokeAsync<MessageResponse>("signMessage");
        return signature;
    }

    public async Task<byte[]?> SignTransaction(byte[] compiledMessage)
    {
        if (_wallet == null)
        {
            Console.WriteLine("wallet adapter is null");
            return null;
        }

        var signature = await _wallet.InvokeAsync<byte[]>("signTransaction", compiledMessage);
        return signature;
    }

    private async Task<string> GetWalletPublicKey()
    {
        if (_adapter == null) return string.Empty;
        
        var publicKey = await _adapter.InvokeAsync<string>("publicKey.toBase58");
        return publicKey;

    }

    public string Name { get; }
    public string Url { get; }
    public string IconUrl { get; }

    public PublicKey? PublicKey { get; private set; }

    public event Action? OnConnected;
    public event Action? OnDisconnected;
    public event Action? OnError;
}