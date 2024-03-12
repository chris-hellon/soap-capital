using System.Data;
using Dapper;
using SoapCapital.Application.Catalog.Notifications.Dto;
using SoapCapital.Application.Common.Attributes;

namespace SoapCapital.Infrastructure.Common.Extensions;

public static class DapperExtensions
{
    public static async Task<IEnumerable<T>> GetAllAsync<T>(this IDbConnection connection, string storedProcedure, object? request = null, int commandTimeout = 180)
    {
        try
        {
            if (connection.State != ConnectionState.Open)
            {
                connection.Close();
                connection.Open();
            }

            if (request != null)
            {
                var parameters = SetDapperParameters(request);

                return await connection.QueryAsync<T>(storedProcedure, parameters,
                        commandType: CommandType.StoredProcedure, commandTimeout: commandTimeout);
            }
            else
            {
                return await connection.QueryAsync<T>(storedProcedure,
                    commandType: CommandType.StoredProcedure, commandTimeout: commandTimeout);
            }
        }
        catch (Exception)
        {
            connection.Close();
            throw;
        }
        finally
        {
            connection.Close();
        }
    }

    public static async Task<T?> CreateUpdateOrDeleteSingleAsync<T>(this IDbConnection connection, string storedProcedure, object? request = null, int commandTimeout = 180)
    {
        try
        {
            if (connection.State != ConnectionState.Open)
            {
                connection.Close();
                connection.Open();
            }

            if (request == null) return default!;
            var parameters = SetDapperParameters(request);

            CommandType? commandType = CommandType.StoredProcedure;
            return await connection.ExecuteScalarAsync<T>(storedProcedure, parameters, null, commandTimeout, commandType);

        }
        catch (Exception)
        {
            connection.Close();
            throw;
        }
        finally
        {
            connection.Close();
        }
    }

    public static async Task<int> CreateUpdateOrDeleteSingleAsync(this IDbConnection connection, string storedProcedure, object? request = null, int commandTimeout = 180)
    {
        try
        {
            if (connection.State != ConnectionState.Open)
            {
                connection.Close();
                connection.Open();
            }

            if (request == null) return default!;
            
            var parameters = SetDapperParameters(request);

            CommandType? commandType = CommandType.StoredProcedure;
            return await connection.ExecuteScalarAsync<int>(storedProcedure, parameters, null, commandTimeout, commandType);

        }
        catch (Exception)
        {
            connection.Close();
            throw;
        }
        finally
        {
            connection.Close();
        }
    }

    public static async Task<T?> GetSingleAsync<T>(this IDbConnection connection, string storedProcedure, object? request = null, int commandTimeout = 180)
    {
        try
        {
            if (connection.State != ConnectionState.Open)
            {
                connection.Close();
                connection.Open();
            }

            if (request != null)
            {
                var parameters = SetDapperParameters(request);

                return await connection.QueryFirstOrDefaultAsync<T>(storedProcedure, parameters,
                       commandType: CommandType.StoredProcedure, commandTimeout: commandTimeout);
            }
            else
            {
                return await connection.QueryFirstOrDefaultAsync<T>(storedProcedure,
                    commandType: CommandType.StoredProcedure, commandTimeout: commandTimeout);
            }
        }
        catch (Exception)
        {
            connection.Close();
            throw;
        }
        finally
        {
            connection.Close();
        }
    }

    private static DynamicParameters SetDapperParameters(object data)
    {
        var dynamicParameters = new DynamicParameters();
        var properties = data.GetType().GetProperties();

        foreach (var property in properties)
        {
            var customAttributes = property.GetCustomAttributes(true);

            var parameterName = property.Name;
            var parameterValue = property.GetValue(data);

            SqlMapper.ICustomQueryParameter? tableValueParameter = null;

            if (customAttributes.Length > 0)
            {
                foreach (var customAttribute in customAttributes)
                {
                    if (customAttribute is DapperIdListParameterAttribute)
                    {
                        tableValueParameter = CreateIdListTable(property.GetValue(data, null) as List<int>);
                    }
                }
            }

            if (parameterValue == null && tableValueParameter == null) continue;
            
            dynamicParameters.Add(parameterName, tableValueParameter ?? parameterValue);
        }

        return dynamicParameters;
    }

    private static SqlMapper.ICustomQueryParameter CreateIdListTable(List<int>? values)
    {
        DataTable dataTable = new();
        dataTable.Columns.Add("Id", typeof(int));

        if (values is not {Count: > 0}) return dataTable.AsTableValuedParameter("[dbo].[IdList]");
        
        DataRow? dataRow;
        values.ForEach(value =>
        {
            dataRow = dataTable.NewRow();
            dataRow["Id"] = value;
            dataTable.Rows.Add(dataRow);
        });

        return dataTable.AsTableValuedParameter("[dbo].[IdList]");
    }
}