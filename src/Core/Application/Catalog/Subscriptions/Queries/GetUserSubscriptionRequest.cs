using SoapCapital.Application.Catalog.Subscriptions.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Subscriptions.Queries;

public class GetUserSubscriptionRequest : IRequest<SubscriptionDto?>
{
    public string? UserId { get; set; }
    public bool? NextSubscription { get; set; }
    public int? PreviousSubscriptionId { get; set; }

    public GetUserSubscriptionRequest(string? userId)
    {
        UserId = userId;
    }

    public GetUserSubscriptionRequest(string? userId, bool? nextSubscription, int? previousSubscriptionId)
    {
        UserId = userId;
        NextSubscription = nextSubscription;
        PreviousSubscriptionId = previousSubscriptionId;
    }
}

internal class GetUserSubscriptionRequestHandler : IRequestHandler<GetUserSubscriptionRequest, SubscriptionDto?>
{
    private readonly IDapperRepository<SubscriptionDto> _repository;

    public GetUserSubscriptionRequestHandler(IDapperRepository<SubscriptionDto> repository) => _repository = repository;
    
    public async Task<SubscriptionDto?> Handle(GetUserSubscriptionRequest request, CancellationToken cancellationToken)
    {
        return await _repository.GetSingleAsync("GetUserSubscription", request);
    }
}