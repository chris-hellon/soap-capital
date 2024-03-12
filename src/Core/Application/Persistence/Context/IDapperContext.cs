using System.Data;

namespace SoapCapital.Application.Persistence.Context;

public interface IDapperContext
{
    public IDbConnection CreateConnection();
}