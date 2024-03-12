using MediatR;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Orders.Commands;
using SoapCapital.Application.Catalog.Orders.Dto;
using SoapCapital.Application.Catalog.Orders.Queries;

namespace SoapCapital.Infrastructure.Catalog.Services;

public class OrdersService : IOrdersService
{
    private readonly ISender _mediator;

    public OrdersService(ISender mediator)
    {
        _mediator = mediator;
    }

    public Task<IEnumerable<OrderDto>> GetOrders(GetOrdersRequest request)
    {
        return _mediator.Send(request);
    }

    public Task<OrderDto?> GetOrder(int id)
    {
        return _mediator.Send(new GetOrderRequest(id));
    }

    public Task<IEnumerable<OrderDto>> GetUserOrders(GetUserOrdersRequest request)
    {
        return _mediator.Send(request);
    }

    public Task<OrderDto?> GetUsersOutstandingOrders(GetUsersOutstandingOrderRequest request)
    {
        return _mediator.Send(request);
    }

    public Task<int> CreateOrder(CreateOrderRequest request)
    {
        return _mediator.Send(request);
    }

    public Task<int> UpdateOrder(UpdateOrderRequest request)
    {
        return _mediator.Send(request);
    }

    public Task DeleteOrder(DeleteOrderRequest request)
    { 
        return _mediator.Send(request);
    }
}