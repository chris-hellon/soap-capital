using SoapCapital.Application.Common.Interfaces;
using SoapCapital.Application.OpenNode.Commands;
using SoapCapital.Application.OpenNode.DTO;
using SoapCapital.Application.OpenNode.Queries;

namespace SoapCapital.Application.OpenNode;

public interface IOpenNodeService : ITransientService
{
    Task<CreateOpenNodeChargeResponseDto> CreateOpenNodeCharge(CreateOpenNodeChargeRequest request);

    Task<GetChargeInfoResponseDto> GetChargeInfo(GetChargeInfoReqest request);
}