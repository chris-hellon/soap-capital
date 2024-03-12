using SoapCapital.Application.Catalog.Orders.Dto;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Orders.Queries;

public class GetOrdersRequest : IRequest<IEnumerable<OrderDto>>
{
    
}

public class GetOrdersRequestHandler : IRequestHandler<GetOrdersRequest, IEnumerable<OrderDto>>
{
    private readonly IDapperRepository<OrderDto> _repository;

    public GetOrdersRequestHandler(IDapperRepository<OrderDto> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<OrderDto>> Handle(GetOrdersRequest query, CancellationToken cancellationToken)
    {
        return await _repository.GetAllAsync("GetOrders", query);
    }
}