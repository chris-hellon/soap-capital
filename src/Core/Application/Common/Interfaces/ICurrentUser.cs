using System.Security.Claims;

namespace SoapCapital.Application.Common.Interfaces;

public interface ICurrentUser
{
    string? Name { get; }
    
    Guid GetUserId();

    string? GetUserEmail();
    
    bool IsAuthenticated();

    bool IsInRole(string role);

    IEnumerable<Claim>? GetUserClaims();
}