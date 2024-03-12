using SoapCapital.Application.Catalog.Users.Commands;
using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Catalog.Users.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Catalog.Interfaces;

public interface IUsersService : ITransientService
{
    public Task<IEnumerable<UserDto>> GetUsers(GetUsersRequest request);
    
    Task<IEnumerable<UserDto>> GetExpiringUsers(GetExpiringUsersRequest request);

    Task<IEnumerable<EmailSubscribedUserDto>> GetEmailSubscribedUsers(GetEmailSubscribedUsersRequest request);

    Task<bool> IsUserEmailSubscribed(IsUserEmailSubscribedRequest request);

    Task SubscribeUser(SubscribeUserRequest request);

    Task UnSubscribeUser(UnsubscribeUserRequest request);
}