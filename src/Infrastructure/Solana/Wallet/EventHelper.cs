using Microsoft.JSInterop;

namespace SoapCapital.Infrastructure.Solana.Wallet;

public class EventHelper
{
    private readonly Func<EventArgs, Task> _callback;
    public EventHelper(Func<EventArgs, Task> callback)
    {
        _callback = callback;
    }
    
    [JSInvokable]
    public Task OnEvent(EventArgs args) => _callback(args);
}
public class EventInterop : IDisposable
{
    private readonly IJSRuntime? _jsRuntime;
    private DotNetObjectReference<EventHelper>? _reference;

    public EventInterop(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async ValueTask<string> SetupEventCallback(Func<EventArgs, Task> callback, IJSObjectReference walletAdapter)
    {
        _reference = DotNetObjectReference.Create(new EventHelper(callback));
        return await walletAdapter.InvokeAsync<string>("addEventListener", _reference);
    }

    public void Dispose()
    {
        _reference?.Dispose();
    }
}