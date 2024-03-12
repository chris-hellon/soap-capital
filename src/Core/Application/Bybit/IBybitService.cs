using SoapCapital.Application.Bybit.Dto;
using SoapCapital.Application.ByBit.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Bybit;

public interface IBybitService : ITransientService
{
    Task<GetAffiliateUsersResponseDto?> GetAffiliateUsers(GetAffiliateUsersRequest request);
}