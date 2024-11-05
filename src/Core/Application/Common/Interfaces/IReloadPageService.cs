namespace SoapCapital.Application.Common.Interfaces;

public interface IReloadPageService : IScopedService
{
    bool ReloadPage { get; set; }
    Func<Task> OnReloadPageChanged { get; set; }
    Task TogglePageReload(bool reloadPage);
}