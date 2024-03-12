using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Users.Queries;

public class GetExpiringUsersRequest : IRequest<IEnumerable<UserDto>>
{
    
}

internal class GetExpiringUsersRequestHandler : IRequestHandler<GetExpiringUsersRequest, IEnumerable<UserDto>>
{
    private readonly IDapperRepository<UserDto> _repository;

    public GetExpiringUsersRequestHandler(IDapperRepository<UserDto> repository) => _repository = repository;
    
    public async Task<IEnumerable<UserDto>> Handle(GetExpiringUsersRequest request, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetExpiringSubscriptions", request);
    }
}