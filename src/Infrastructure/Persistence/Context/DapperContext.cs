using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Options;
using SoapCapital.Application.Persistence.Context;

namespace SoapCapital.Infrastructure.Persistence.Context;

public class DapperContext : IDapperContext
{
    private readonly string _connectionString;
    public DapperContext(IOptions<DatabaseSettings> dataBaseSettings)
    {
        _connectionString = dataBaseSettings.Value.ConnectionString ?? throw new InvalidOperationException();
    }
    public IDbConnection CreateConnection() => new SqlConnection(_connectionString);
}

