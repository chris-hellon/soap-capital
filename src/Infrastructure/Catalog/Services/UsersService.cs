using MediatR;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Users.Commands;
using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Catalog.Users.Queries;

namespace SoapCapital.Infrastructure.Catalog.Services;

public class UsersService : IUsersService
{
    private readonly ISender _mediator;

    public UsersService(ISender mediator)
    {
        _mediator = mediator;
    }
    
    public Task<IEnumerable<UserDto>> GetUsers(GetUsersRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<IEnumerable<UserDto>> GetExpiringUsers(GetExpiringUsersRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<IEnumerable<EmailSubscribedUserDto>> GetEmailSubscribedUsers(GetEmailSubscribedUsersRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<bool> IsUserEmailSubscribed(IsUserEmailSubscribedRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task SubscribeUser(SubscribeUserRequest request)
    { 
        return _mediator.Send(request);
    }
    
    public Task UnSubscribeUser(UnsubscribeUserRequest request)
    { 
        return _mediator.Send(request);
    }
}