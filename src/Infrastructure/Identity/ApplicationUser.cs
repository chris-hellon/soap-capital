using Microsoft.AspNetCore.Identity;

namespace SoapCapital.Infrastructure.Identity;

public class ApplicationUser : IdentityUser
{
    public string? ProfileImageUrl { get; set; }

    public bool EmailSubscribed { get; set; } = true;

    public DateTime? SignUpDate { get; set; }
    
    public string? DiscordUsername { get; set; }
    
    public string? BybitId { get; set; }
    
    public string? TyrelPublicKey { get; set; }
}

