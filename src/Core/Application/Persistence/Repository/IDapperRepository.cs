using SoapCapital.Application.Common.Models;

namespace SoapCapital.Application.Persistence.Repository;

public interface IDapperRepository<T>
{
    Task<IEnumerable<T>> GetAllAsync(string storedProcedureName, object request);

    Task<T?> GetSingleAsync(string storedProcedureName, object request);

    Task<T?> CreateSingleAsync(string storedProcedureName, object request);

    Task<T?> UpdateSingleAsync(string storedProcedureName, object request);

    Task<T?> DeleteSingleAsync(string storedProcedureName, object request);

    Task<PaginationResponse<T>> GetPaginatedListAsync(string storedProcedureName, object request, int pageNumber, int pageSize);
}

public interface IDapperRepository
{
    Task CreateSingleAsync(string storedProcedureName, object request);

    Task DeleteSingleAsync(string storedProcedureName, object request);
}