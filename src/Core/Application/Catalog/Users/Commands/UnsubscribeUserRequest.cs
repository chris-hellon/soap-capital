using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Users.Commands;

public class UnsubscribeUserRequest : IRequest
{
    public string? Id { get; set; }

    public UnsubscribeUserRequest(string? id)
    {
        Id = id;
    }
}

internal class UnsubscribeUserRequestHandler : IRequestHandler<UnsubscribeUserRequest>
{
    private readonly IDapperRepository<EmailSubscribedUserDto> _repository;

    public UnsubscribeUserRequestHandler(IDapperRepository<EmailSubscribedUserDto> repository) => _repository = repository;
    
    public async Task Handle(UnsubscribeUserRequest request, CancellationToken cancellationToken)
    {
        await _repository.UpdateSingleAsync("UnsubscribeUser", request);
    }
}