using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Orders.Commands;

public class CreateOrderRequest : IRequest<int>
{
    public int PackageId { get; set; }
    public decimal Amount { get; set; }
    public string? UserId { get; set; }
    public bool OrderConfirmed { get; set; }
    public int? UpgradeSubscriptionId { get; set; }

    public CreateOrderRequest(int packageId, decimal amount, string? userId, bool orderConfirmed, int? upgradeSubscriptionId = null)
    {
        PackageId = packageId;
        Amount = amount;
        UserId = userId;
        OrderConfirmed = orderConfirmed;
        UpgradeSubscriptionId = upgradeSubscriptionId;
    }
}

internal class CreateOrderRequestHandler : IRequestHandler<CreateOrderRequest, int>
{
    private readonly IDapperRepository<int> _repository;

    public CreateOrderRequestHandler(IDapperRepository<int> repository)
    {
        _repository = repository;
    }

    public async Task<int> Handle(CreateOrderRequest query, CancellationToken cancellationToken)
    {
        return await _repository.CreateSingleAsync("CreateOrder", query);
    }
}


