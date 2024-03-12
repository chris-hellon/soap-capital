using SoapCapital.Application.Catalog.Orders.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Orders.Queries;

public class GetUsersOutstandingOrderRequest : IRequest<OrderDto?>
{
    public string UserId { get; set; }

    public GetUsersOutstandingOrderRequest(string userId)
    {
        UserId = userId;
    }
}

public class GetUsersOutstandingOrderRequestHandler : IRequestHandler<GetUsersOutstandingOrderRequest, OrderDto?>
{
    private readonly IDapperRepository<OrderDto> _repository;

    public GetUsersOutstandingOrderRequestHandler(IDapperRepository<OrderDto> repository)
    {
        _repository = repository;
    }

    public async Task<OrderDto?> Handle(GetUsersOutstandingOrderRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetSingleAsync("GetUsersOutstandingOrder", query);
    }
}