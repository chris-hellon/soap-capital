using Mapster;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using MudBlazor;
using SoapCapital.Infrastructure.Common.Services;
using SoapCapital.Website.Components.Dialogs;

namespace SoapCapital.Website.Components.EntityTable;

public partial class EntityEditTable<TEntity, TRequest, TId> where TRequest : new()
{
    [Parameter] public string? EntityName { get; set; }

    [Parameter] public List<EntityField<TEntity>>? Fields { get; set; }

    [Parameter] public IEnumerable<TEntity>? EntityList { get; set; }

    [Parameter] public bool Loading { get; set; }

    [Parameter] public Func<TEntity, TId>? IdFunc { get; set;  }
    
    [Parameter] public Func<string?, TEntity, bool>? SearchFunc { get; set; }
    
    [Parameter] public Func<TRequest, Task>? CreateFunc { get; set;  }
    
    [Parameter] public Func<TRequest, Task>? UpdateFunc { get; set;  }
    
    [Parameter] public Func<TId, Task>? DeleteFunc { get; set;  }
    
    [Parameter] public RenderFragment<TEntity>? ExtraActions { get; set; }
    
    [Parameter] public Func<Task>? EditFormInitializedFunc { get; set; }
    
    [Parameter] public Func<Task<IEnumerable<TEntity>?>>? LoadDataFunc { get; set; }
    
    [Parameter] public RenderFragment<TRequest>? EditFormContent { get; set; }

    [Parameter] public Func<InputFileChangeEventArgs, Task>? UploadFiles { get; set; }

    [Parameter] public bool AdvancedSearchEnabled { get; set; }
    
    [Parameter] public RenderFragment? AdvancedSearchContent { get; set; }
    public TRequest? RequestModel;
    
    private string? SearchString { get; set; }

    private MudTable<TEntity> _table = default!;

    public IDialogReference? _addEditModalRef;
    
    private bool _advancedSearchExpanded;
    
    private bool LocalSearch(TEntity entity) =>
        SearchFunc is { } searchFunc
            ? searchFunc(SearchString, entity)
            : string.IsNullOrWhiteSpace(SearchString);

    private async Task InvokeModal(TEntity? entity = default)
    {
        await LoadingService.ToggleLoaderVisibility(true);

        var isCreate = entity is null;

        var parameters = new DialogParameters()
        {
            {nameof(AddEditModal<TRequest>.EditFormContent), EditFormContent},
            {nameof(AddEditModal<TRequest>.OnInitializedFunc), EditFormInitializedFunc},
            {nameof(AddEditModal<TRequest>.EntityName), EntityName}
        };
        
        if (isCreate)
        {
            _ = CreateFunc ?? throw new InvalidOperationException("CreateFunc can't be null!");
            parameters.Add(nameof(AddEditModal<TRequest>.SaveFunc), CreateFunc);
            RequestModel = new TRequest();
        }
        else
        {
            _ = IdFunc ?? throw new InvalidOperationException("IdFunc can't be null!");
            var id = IdFunc(entity!);
            parameters.Add(nameof(AddEditModal<TRequest>.Id), id);
            
            if (UpdateFunc == null)
            {
                parameters.Add(nameof(AddEditModal<TRequest>.SaveFunc), null);
            }
            else
            {
                Task SaveFunc(TRequest entity) => UpdateFunc(entity);
                parameters.Add(nameof(AddEditModal<TRequest>.SaveFunc), (Func<TRequest, Task>) SaveFunc);
            }

            RequestModel = entity.Adapt<TRequest>();
        }
        
        parameters.Add(nameof(AddEditModal<TRequest>.RequestModel), RequestModel);

        var options = new DialogOptions {CloseButton = true, MaxWidth = MaxWidth.Medium, FullWidth = true, DisableBackdropClick = true};

        var dialog = await DialogService.ShowAsync<AddEditModal<TRequest>>(string.Empty, parameters, options);
        
        await LoadingService.ToggleLoaderVisibility(false);
        
        SetAddEditModalRef(dialog);

        var result = await dialog.Result;

        if (!result.Canceled)
        {
            await LocalLoadDataAsync();
        }
    }

    private async Task Delete(TEntity entity)
    {
        _ = IdFunc ?? throw new InvalidOperationException("IdFunc can't be null!");
        var id = IdFunc(entity);

        const string deleteContent = "You're sure you want to delete this {0}?";
        var parameters = new DialogParameters
        {
            {nameof(DeleteConfirmation.ContentText), string.Format(deleteContent, EntityName, id)}
        };
        var options = new DialogOptions
            {CloseButton = true, MaxWidth = MaxWidth.Small, FullWidth = true, DisableBackdropClick = true};
        var dialog = await DialogService.ShowAsync<DeleteConfirmation>("Delete", parameters, options);
        var result = await dialog.Result;
        if (!result.Canceled)
        {
            _ = DeleteFunc ?? throw new InvalidOperationException("DeleteFunc can't be null!");

            await ServiceHelper.ExecuteCallGuardedAsync(
                () => DeleteFunc(id),
                Snackbar,
                Logger,
                $"{EntityName} Deleted.");

            await LocalLoadDataAsync();
        }
    }

    private async Task LocalLoadDataAsync()
    {
        if (Loading)
        {
            return;
        }

        Loading = true;
        _advancedSearchExpanded = false;

        if (LoadDataFunc != null)
        {
            if (await ServiceHelper.ExecuteCallGuardedAsync(
                    () => LoadDataFunc(), Snackbar,
                    Logger)
                is List<TEntity> result)
            {
                EntityList = result;
            }
        }

        Loading = false;
    }
    
    internal void SetAddEditModalRef(IDialogReference dialog) =>
        _addEditModalRef = dialog;
    
    public IAddEditModal<TRequest>? AddEditModal =>
        _addEditModalRef?.Dialog as IAddEditModal<TRequest>;
}
