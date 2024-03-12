using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using MudBlazor;
using SoapCapital.Infrastructure.Common.Services;

namespace SoapCapital.Website.Components.Dialogs;

public partial class AddEditModal<TRequest> : IAddEditModal<TRequest>
{
    [Parameter] [EditorRequired] public RenderFragment<TRequest> EditFormContent { get; set; } = default!;

    [Parameter] [EditorRequired] public TRequest RequestModel { get; set; } = default!;
    
    [Parameter] [EditorRequired] public Func<TRequest, Task>? SaveFunc { get; set; }
    
    [Parameter] public Func<Task>? OnInitializedFunc { get; set; }
    
    [Parameter] [EditorRequired] public string EntityName { get; set; } = default!;
    
    [Parameter] public object? Id { get; set; }
    
    [CascadingParameter] private MudDialogInstance MudDialog { get; set; } = default!;

    public bool IsCreate => Id is null;

    public bool IsView => SaveFunc is null;

    public void ForceRender() => StateHasChanged();
    
    private EditContext? EditContext { get; set; }
    
    private bool LoaderVisible { get; set; } = false;
    
    private bool BusySubmitting { get; set; }
    
    protected override async Task OnInitializedAsync()
    {
        OnInitializedFunc?.Invoke();

        if (RequestModel != null)
            EditContext = new EditContext(RequestModel);
        
        await LoadingService.ToggleLoaderVisibility(true);
        
        // return base.OnInitializedAsync();
    }

    private async Task SaveAsync()
    {
        await LoadingService.ToggleLoaderVisibility(true);
        LoaderVisible = true;
        StateHasChanged();

        BusySubmitting = true;
        
        try
        {
            if (await ServiceHelper.ExecuteCallGuardedAsync(
                    () => SaveFunc?.Invoke(RequestModel) ?? throw new InvalidOperationException(),
                    Snackbar,
                    Logger,
                    $"{EntityName} {(IsCreate ? "Created" : "Updated")}."))
            {
                MudDialog.Close();

                LoaderVisible = false;
                BusySubmitting = false;
                await LoadingService.ToggleLoaderVisibility(false);
                StateHasChanged();
            }
            else
            {
                LoaderVisible = false;
                BusySubmitting = false;
                await LoadingService.ToggleLoaderVisibility(false);
                StateHasChanged();
            }
        }
        catch (Exception ex)
        {
            await LoadingService.ToggleLoaderVisibility(false);
            Snackbar.Add(ex.Message, Severity.Error);
            BusySubmitting = false;
            StateHasChanged();
        }
        
    }

    private void Cancel() =>
        MudDialog.Cancel();
}