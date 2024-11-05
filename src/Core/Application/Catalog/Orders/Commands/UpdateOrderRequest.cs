using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Orders.Commands;

public class UpdateOrderRequest : IRequest<int>
{
    public int Id { get; set; }
    public string? OpenNodeId { get; set; }
    public bool OrderConfirmed { get; set; }
    public string? StripeSessionId { get; set; }
    public string? SolanaPayReferenceId { get; set; }
    public string? SolanaPayToken { get; set; }

    public UpdateOrderRequest(int orderId, string? openNodeId, bool orderConfirmed, string? stripeSessionId, string? solanaPayReferenceId = null, string? solanaPayToken = null)
    {
        Id = orderId;
        OpenNodeId = openNodeId;
        OrderConfirmed = orderConfirmed;
        StripeSessionId = stripeSessionId;
        SolanaPayToken = solanaPayToken;
        SolanaPayReferenceId = solanaPayReferenceId;
    }
}

internal class UpdateOrderRequestHandler : IRequestHandler<UpdateOrderRequest, int>
{
    private readonly IDapperRepository<int> _repository;

    public UpdateOrderRequestHandler(IDapperRepository<int> repository)
    {
        _repository = repository;
    }

    public async Task<int> Handle(UpdateOrderRequest query, CancellationToken cancellationToken)
    {
        return await _repository.UpdateSingleAsync("UpdateOrder", query);
    }
}


