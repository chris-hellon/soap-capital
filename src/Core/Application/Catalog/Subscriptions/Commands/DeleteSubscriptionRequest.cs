using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Subscriptions.Commands;

public class DeleteSubscriptionRequest : IRequest
{
    public int? Id { get; set; }

    public DeleteSubscriptionRequest(int? id)
    {
        Id = id;
    }
}

internal class DeleteSubscriptionRequestHandler : IRequestHandler<DeleteSubscriptionRequest>
{
    private readonly IDapperRepository _repository;

    public DeleteSubscriptionRequestHandler(IDapperRepository repository) => (_repository) = (repository);
    
    public async Task Handle(DeleteSubscriptionRequest request, CancellationToken cancellationToken)
    {
         await _repository.DeleteSingleAsync("DeleteSubscription", request);
    }
}