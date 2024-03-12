using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Users.Queries;

public class GetUsersRequest : IRequest<IEnumerable<UserDto>>
{
    
}

internal class GetUsersRequestHandler : IRequestHandler<GetUsersRequest, IEnumerable<UserDto>>
{
    private readonly IDapperRepository<UserDto> _repository;

    public GetUsersRequestHandler(IDapperRepository<UserDto> repository) => _repository = repository;
    
    public async Task<IEnumerable<UserDto>> Handle(GetUsersRequest request, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetUsers", request);
    }
}