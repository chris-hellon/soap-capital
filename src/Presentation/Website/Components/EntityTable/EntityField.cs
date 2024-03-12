namespace SoapCapital.Website.Components.EntityTable;

public record EntityField<TEntity>(
    Func<TEntity, object?> ValueFunc,
    string DisplayName,
    Func<TEntity, string>? NavigateUrlFunc = null,
    string? Width = null,
    string? Target = null)
{

}