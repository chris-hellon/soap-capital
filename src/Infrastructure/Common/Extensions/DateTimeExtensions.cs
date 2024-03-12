namespace SoapCapital.Infrastructure.Common.Extensions;

public static class DateTimeExtensions
{
    public static string FirstDayOfMonth(this DateTime date)
    {
        return new DateTime(date.Year, date.Month, 1).ToString("MM/dd/yyyy");
    }

    public static string LastDayOfMonth(this DateTime date)
    {
        return new DateTime(DateTime.Now.Year, DateTime.Now.Month + 1, 1).AddDays(-1).ToString("MM/dd/yyyy");
    }
}