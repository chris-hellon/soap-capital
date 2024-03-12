using System.Data;
using SoapCapital.Application.Common.Models;
using SoapCapital.Application.Persistence.Context;
using SoapCapital.Application.Persistence.Repository;
using SoapCapital.Infrastructure.Common.Extensions;

namespace SoapCapital.Infrastructure.Persistence.Repository;

public class DapperRepository<T> : IDapperRepository<T>
{
    private readonly IDapperContext _dapperContext;

    public DapperRepository(IDapperContext dapperContext)
    {
        _dapperContext = dapperContext;
    }

    protected IDbConnection DapperConnection => _dapperContext.CreateConnection();

    public async Task<IEnumerable<T>> GetAllAsync(string storedProcedureName, object request)
    {
        return await DapperConnection.GetAllAsync<T>(storedProcedureName, request);
    }

    public async Task<T?> GetSingleAsync(string storedProcedureName, object request)
    {
        return await DapperConnection.GetSingleAsync<T>(storedProcedureName, request);
    }

    public async Task<T?> CreateSingleAsync(string storedProcedureName, object request)
    {
        return await DapperConnection.CreateUpdateOrDeleteSingleAsync<T>(storedProcedureName, request);
    }

    public async Task<T?> DeleteSingleAsync(string storedProcedureName, object request)
    {
        return await DapperConnection.CreateUpdateOrDeleteSingleAsync<T>(storedProcedureName, request);
    }

    public async Task<T?> UpdateSingleAsync(string storedProcedureName, object request)
    {
        return await DapperConnection.CreateUpdateOrDeleteSingleAsync<T>(storedProcedureName, request);
    }

    public async Task<PaginationResponse<T>> GetPaginatedListAsync(string storedProcedureName, object request, int pageNumber, int pageSize)
    {
        var response = await DapperConnection.GetAllAsync<T>(storedProcedureName, request);

        int? totalCount = 0;

        var enumerable = response as T[] ?? response.ToArray();
        if (enumerable.Length == 0) return new PaginationResponse<T>(enumerable, totalCount ?? 0, pageNumber, pageSize);
        
        var firstItem = enumerable.FirstOrDefault();
        
        if (firstItem == null) return new PaginationResponse<T>(enumerable, totalCount ?? 0, pageNumber, pageSize);
        var t = firstItem.GetType();

        var prop = t.GetProperty("TotalItems");

        if (prop != null)
        {
            totalCount = (int?)prop?.GetValue(firstItem);
        }

        return new PaginationResponse<T>(enumerable, totalCount ?? 0, pageNumber, pageSize);
    }
}

public class DapperRepository : IDapperRepository
{
    private readonly IDapperContext _dapperContext;

    public DapperRepository(IDapperContext dapperContext)
    {
        _dapperContext = dapperContext;
    }

    private IDbConnection DapperConnection => _dapperContext.CreateConnection();

    public async Task CreateSingleAsync(string storedProcedureName, object request)
    {
        await DapperConnection.CreateUpdateOrDeleteSingleAsync(storedProcedureName, request);
    }

    public async Task DeleteSingleAsync(string storedProcedureName, object request)
    {
        await DapperConnection.CreateUpdateOrDeleteSingleAsync(storedProcedureName, request);
    }
}

