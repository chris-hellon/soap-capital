using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Infrastructure.Common.Services;

public class ReloadPageService : IReloadPageService
{
    public bool ReloadPage {get;set;}
    public Func<Task> OnReloadPageChanged { get; set; } = default!;
    public async Task TogglePageReload(bool reloadPage)
    {
        ReloadPage = reloadPage; 
        await OnReloadPageChanged.Invoke();
    }
}