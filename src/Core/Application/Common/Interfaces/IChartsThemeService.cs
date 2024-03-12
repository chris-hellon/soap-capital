namespace SoapCapital.Application.Common.Interfaces;

public interface IChartsThemeService : IScopedService
{
    bool IsDarkMode {get;set;}
    Func<Task> OnDarkModeChanged {get;set;}
    Task ToggleChartsDarkMode(bool isDarkMode);
}