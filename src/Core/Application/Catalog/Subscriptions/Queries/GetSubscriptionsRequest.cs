using SoapCapital.Application.Catalog.Subscriptions.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Subscriptions.Queries;

public class GetSubscriptionsRequest : IRequest<IEnumerable<SubscriptionDto>>
{
    
}

internal class GetSubscriptionsRequestHandler : IRequestHandler<GetSubscriptionsRequest, IEnumerable<SubscriptionDto>>
{
    private readonly IDapperRepository<SubscriptionDto> _repository;

    public GetSubscriptionsRequestHandler(IDapperRepository<SubscriptionDto> repository) => _repository = repository;
    
    public async Task<IEnumerable<SubscriptionDto>> Handle(GetSubscriptionsRequest request, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetSubscriptions", request);
    }
}

