namespace SoapCapital.Application.Common.Extensions;

public static class ListExtensions
{
    public static T SecondToLast<T>(this IList<T> list)
    {
        ArgumentNullException.ThrowIfNull(list);

        if (list.Count < 2)
            throw new InvalidOperationException("The list does not contain enough elements.");

        return list.ElementAt(list.Count - 2);
    }
}