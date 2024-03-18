using MediatR;
using SoapCapital.Application.Bybit;
using SoapCapital.Application.Bybit.Dto;
using SoapCapital.Application.Bybit.Queries;

namespace SoapCapital.Infrastructure.Bybit;

public class BybitService : IBybitService
{
    private readonly ISender _mediator;

    public BybitService(ISender mediator)
    {
        _mediator = mediator;
    }

    public Task<GetAffiliateUsersResponseDto?> GetAffiliateUsers(GetAffiliateUsersRequest request)
    {
        return _mediator.Send(request);
    }
}