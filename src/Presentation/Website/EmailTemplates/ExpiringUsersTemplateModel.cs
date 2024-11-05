using SoapCapital.Application.Catalog.Users.Dto;

namespace SoapCapital.Website.EmailTemplates;

public class ExpiringUsersTemplateModel
{
    public List<UserDto> ExpiringUsers { get; set; }

    public ExpiringUsersTemplateModel(List<UserDto> expiringUsers)
    {
        ExpiringUsers = expiringUsers;
    }
}