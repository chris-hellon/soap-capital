using System.ComponentModel.DataAnnotations;
using MudBlazor;
using Serilog;
using Serilog.Context;

namespace SoapCapital.Infrastructure.Common.Services;

public static class ServiceHelper
{
    public static async Task<T?> ExecuteCallGuardedAsync<T>(
        Func<Task<T>> call,
        ISnackbar snackbar,
        ILogger logger,
        string? successMessage = null)
    {
        try
        {
            var result = await call();

            if (!string.IsNullOrWhiteSpace(successMessage))
            {
                snackbar.Add(successMessage, Severity.Success);
            }

            return result;
        }
        catch (ValidationException ex)
        {
            snackbar.Add(ex.ValidationResult.ErrorMessage, Severity.Error);
        }
        catch (Exception ex)
        {
            snackbar.Add(ex.Message, Severity.Error);
            logger.Error(ex, ex.Message);
        }

        return default;
    }

    public static async Task<bool> ExecuteCallGuardedAsync(
        Func<Task> call,
        ISnackbar snackbar,
        ILogger logger,
        string? successMessage = null)
    {
        try
        {
            await call();

            if (!string.IsNullOrWhiteSpace(successMessage))
            {
                snackbar.Add(successMessage, Severity.Success);
            }

            return true;
        }
        catch (ValidationException ex)
        {
            snackbar.Add(ex.ValidationResult.ErrorMessage, Severity.Error);
        }
        catch (Exception ex)
        {
            snackbar.Add(ex.Message, Severity.Error);
            logger.Error(ex, ex.Message);
            
            var errorId = Guid.NewGuid().ToString();
            LogContext.PushProperty("ErrorId", errorId);
            LogContext.PushProperty("StackTrace", ex.StackTrace);
        }

        return false;
    }
}