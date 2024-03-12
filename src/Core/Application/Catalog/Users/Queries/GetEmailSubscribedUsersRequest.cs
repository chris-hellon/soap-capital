using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Users.Queries;

public class GetEmailSubscribedUsersRequest : IRequest<IEnumerable<EmailSubscribedUserDto>>
{
    
}

internal class GetEmailSubscribedUsersRequestHandler : IRequestHandler<GetEmailSubscribedUsersRequest, IEnumerable<EmailSubscribedUserDto>>
{
    private readonly IDapperRepository<EmailSubscribedUserDto> _repository;

    public GetEmailSubscribedUsersRequestHandler(IDapperRepository<EmailSubscribedUserDto> repository) => _repository = repository;
    
    public async Task<IEnumerable<EmailSubscribedUserDto>> Handle(GetEmailSubscribedUsersRequest request, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetEmailSubscribedUsers", request);
    }
}