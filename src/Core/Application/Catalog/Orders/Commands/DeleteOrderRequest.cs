using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Orders.Commands;

public class DeleteOrderRequest : IRequest
{
    public int OrderId { get; set; }
}

internal class DeleteOrderRequestHandler : IRequestHandler<DeleteOrderRequest>
{
    private readonly IDapperRepository _repository;

    public DeleteOrderRequestHandler(IDapperRepository repository)
    {
        _repository = repository;
    }

    public async Task Handle(DeleteOrderRequest query, CancellationToken cancellationToken)
    { 
        await _repository.DeleteSingleAsync("DeleteOrder", query);
    }
}

