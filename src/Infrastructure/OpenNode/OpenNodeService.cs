using MediatR;
using SoapCapital.Application.OpenNode;
using SoapCapital.Application.OpenNode.Commands;
using SoapCapital.Application.OpenNode.DTO;
using SoapCapital.Application.OpenNode.Queries;

namespace SoapCapital.Infrastructure.OpenNode;

public class OpenNodeService : IOpenNodeService
{
    private readonly ISender _mediator;

    public OpenNodeService(ISender mediator)
    {
        _mediator = mediator;
    }

    public Task<CreateOpenNodeChargeResponseDto> CreateOpenNodeCharge(CreateOpenNodeChargeRequest request)
    {
        return _mediator.Send(request);
    }

    public Task<GetChargeInfoResponseDto> GetChargeInfo(GetChargeInfoReqest request)
    {
        return _mediator.Send(request);
    }
}