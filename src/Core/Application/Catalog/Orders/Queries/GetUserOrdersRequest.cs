using SoapCapital.Application.Catalog.Orders.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Orders.Queries;

public class GetUserOrdersRequest : IRequest<IEnumerable<OrderDto>>
{
    public string UserId { get; set; }

    public GetUserOrdersRequest(string userId)
    {
        UserId = userId;
    }
}

public class GetUserOrdersRequestHandler : IRequestHandler<GetUserOrdersRequest, IEnumerable<OrderDto>>
{
    private readonly IDapperRepository<OrderDto> _repository;

    public GetUserOrdersRequestHandler(IDapperRepository<OrderDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<OrderDto>> Handle(GetUserOrdersRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetUserOrders", query);
    }
}