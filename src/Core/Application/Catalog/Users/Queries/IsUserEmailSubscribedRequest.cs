using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Users.Queries;

public class IsUserEmailSubscribedRequest : IRequest<bool>
{
    public string? UserId { get; set; }
}

internal class IsUserEmailSubscribedRequestHandler : IRequestHandler<IsUserEmailSubscribedRequest, bool>
{
    private readonly IDapperRepository<EmailSubscribedUserDto> _repository;

    public IsUserEmailSubscribedRequestHandler(IDapperRepository<EmailSubscribedUserDto> repository) => _repository = repository;
    
    public async Task<bool> Handle(IsUserEmailSubscribedRequest request, CancellationToken cancellationToken)
    {
        var subscribedUser = await _repository.GetSingleAsync("GetEmailSubscribedUsers", request);

        return subscribedUser != null;
    }
}