using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Infrastructure.Common.Services;

public class LoadingService : ILoadingService
{
    public bool LoaderVisible {get;set;}
    public Func<Task> OnLoaderVisibilityChanged { get; set; } = default!;
    public async Task ToggleLoaderVisibility(bool isVisible)
    {
        LoaderVisible = isVisible; 
        await OnLoaderVisibilityChanged.Invoke();
    }
}