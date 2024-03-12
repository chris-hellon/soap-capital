using SoapCapital.Application.Catalog.Users.Commands;
using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Catalog.Users.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Identity;

public interface IUserService : ITransientService
{
    Task<string> CreateAsync(CreateUserRequest request);

    Task UpdateAsync(UpdateUserRequest request);

    public Task<IEnumerable<UserDto>> GetUsers(GetUsersRequest request);

    Task DeleteAsync(string userId);
}