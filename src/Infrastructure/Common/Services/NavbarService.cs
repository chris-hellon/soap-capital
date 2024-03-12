using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Infrastructure.Common.Services;

public class NavbarService : INavbarService
{
    public bool IsTransparent {get;set;}
    public Func<Task>? OnNavbarTransparencyChanged { get; set; }
    public void ToggleNavbarTransparency(bool isTransparent)
    {
        IsTransparent = isTransparent;
        OnNavbarTransparencyChanged?.Invoke();
    }
}