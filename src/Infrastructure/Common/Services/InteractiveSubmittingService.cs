using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Infrastructure.Common.Services;

public class InteractiveSubmittingService : IInteractiveSubmittingService
{
    public bool BusySubmitting {get;set;}
    public Func<Task> OnBusySubmittingChanged { get; set; } = default!;
    public async Task ToggleBusySubmitting(bool busySubmitting)
    {
        BusySubmitting = busySubmitting;
        await OnBusySubmittingChanged.Invoke();
    }
}