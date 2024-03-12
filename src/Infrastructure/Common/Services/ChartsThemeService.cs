using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Infrastructure.Common.Services;

public class ChartsThemeService : IChartsThemeService
{
    public bool IsDarkMode { get; set; } = true;
    public Func<Task> OnDarkModeChanged { get; set; } = default!;
    public async Task ToggleChartsDarkMode(bool isDarkMode)
    {
        IsDarkMode = isDarkMode;
        await OnDarkModeChanged.Invoke();
    }
}