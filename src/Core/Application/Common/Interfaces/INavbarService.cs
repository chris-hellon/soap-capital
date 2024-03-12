namespace SoapCapital.Application.Common.Interfaces;

public interface INavbarService : IScopedService
{
    bool IsTransparent {get;set;}
    Func<Task>? OnNavbarTransparencyChanged { get; set; }
    void ToggleNavbarTransparency(bool isTransparent);
}