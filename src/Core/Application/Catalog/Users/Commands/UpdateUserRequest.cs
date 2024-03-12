using System.ComponentModel.DataAnnotations;

namespace SoapCapital.Application.Catalog.Users.Commands;

public class UpdateUserRequest : IRequest<string>
{
    public string? Id { get; set; }
    
    [Required(AllowEmptyStrings = false)]
    public string? UserName { get; set; }

    [Required(AllowEmptyStrings = false)]
    [EmailAddress]
    public string? Email { get; set; }
    
    public string? DiscordUserName { get; set; }

    [Required(AllowEmptyStrings = false)]
    [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
    [DataType(DataType.Password)]
    public string? Password { get; set; }

    [Required(AllowEmptyStrings = false)]
    [DataType(DataType.Password)]
    [Display(Name = "Confirm password")]
    [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
    public string? ConfirmPassword { get; set; }

    [Display(Name = "Package")]
    public int? PackageId { get; set; }
}