using SoapCapital.Application.Catalog.Orders.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Orders.Queries;

public class GetOrderRequest : IRequest<OrderDto?>
{
    public int OrderId { get; set; }

    public GetOrderRequest(int orderId)
    {
        OrderId = orderId;
    }
}

public class GetOrderRequestHandler : IRequestHandler<GetOrderRequest, OrderDto?>
{
    private readonly IDapperRepository<OrderDto> _repository;

    public GetOrderRequestHandler(IDapperRepository<OrderDto> repository)
    {
        _repository = repository;
    }

    public async Task<OrderDto?> Handle(GetOrderRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetSingleAsync("GetOrder", query);
    }
}