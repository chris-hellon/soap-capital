using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Users.Commands;

public class SubscribeUserRequest : IRequest
{
    public string? Id { get; set; }
}

internal class SubscribeUserRequestHandler : IRequestHandler<SubscribeUserRequest>
{
    private readonly IDapperRepository<EmailSubscribedUserDto> _repository;

    public SubscribeUserRequestHandler(IDapperRepository<EmailSubscribedUserDto> repository) => _repository = repository;
    
    public async Task Handle(SubscribeUserRequest request, CancellationToken cancellationToken)
    {
        await _repository.UpdateSingleAsync("SubscribeUser", request);
    }
}