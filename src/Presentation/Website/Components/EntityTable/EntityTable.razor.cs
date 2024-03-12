using Mapster;
using Microsoft.AspNetCore.Components;
using MudBlazor;
using SoapCapital.Infrastructure.Common.Services;
using SoapCapital.Website.Components.Dialogs;

namespace SoapCapital.Website.Components.EntityTable;

public partial class EntityTable<TEntity> where TEntity : new()
{
    [Parameter] public List<EntityField<TEntity>>? Fields { get; set; }

    [Parameter] public IEnumerable<TEntity>? EntityList { get; set; }
    
    [Parameter] public Func<string?, TEntity, bool>? SearchFunc { get; set; }
    
    [Parameter] public bool Loading { get; set; }
    
    private string? SearchString { get; set; }

    private MudTable<TEntity> _table = default!;
    
    private bool LocalSearch(TEntity entity) =>
        SearchFunc is { } searchFunc
            ? searchFunc(SearchString, entity)
            : string.IsNullOrWhiteSpace(SearchString);
}
