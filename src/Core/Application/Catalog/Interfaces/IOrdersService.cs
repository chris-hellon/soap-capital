using SoapCapital.Application.Catalog.Orders.Commands;
using SoapCapital.Application.Catalog.Orders.Dto;
using SoapCapital.Application.Catalog.Orders.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Catalog.Interfaces;

public interface IOrdersService : ITransientService
{
    Task<IEnumerable<OrderDto>> GetOrders(GetOrdersRequest request);

    Task<OrderDto?> GetOrder(int id);

    Task<IEnumerable<OrderDto>> GetUserOrders(GetUserOrdersRequest request);

    Task<OrderDto?> GetUsersOutstandingOrders(GetUsersOutstandingOrderRequest request);

    Task<int> CreateOrder(CreateOrderRequest request);

    Task<int> UpdateOrder(UpdateOrderRequest request);

    Task DeleteOrder(DeleteOrderRequest request);
}