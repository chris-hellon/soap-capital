using bybit.net.api;
using bybit.net.api.ApiServiceImp;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using SoapCapital.Application.Bybit.Dto;
using SoapCapital.Application.Common.Exceptions;

namespace SoapCapital.Application.Bybit.Queries;

public class GetAffiliateUsersRequest : IRequest<GetAffiliateUsersResponseDto?>
{
    public string UserId { get; set; }

    public GetAffiliateUsersRequest(string userId)
    {
        UserId = userId;
    }
}

internal class GetAffiliateUsersRequestHandler : IRequestHandler<GetAffiliateUsersRequest, GetAffiliateUsersResponseDto?>
{
    private readonly BybitSettings _bybitSettings;

    public GetAffiliateUsersRequestHandler(IOptions<BybitSettings> bybitSettings)
    {
        _bybitSettings = bybitSettings.Value;
    }

    public async Task<GetAffiliateUsersResponseDto?> Handle(GetAffiliateUsersRequest request, CancellationToken cancellationToken)
    {
        if (_bybitSettings.ApiKey == null || _bybitSettings.Secret == null)
            throw new NotFoundException("No API Key or Secret configured");
        
        var byBitUserService = new BybitUserService(apiKey: _bybitSettings.ApiKey, apiSecret: _bybitSettings.Secret, BybitConstants.HTTP_MAINNET_URL);
        var userInfo = await byBitUserService.GetAffiliateUserInfo(request.UserId);
        
        if (userInfo == null) return null;
        
        var userInfoParsed = JsonConvert.DeserializeObject<GetAffiliateUsersResponseDto>(userInfo);

        return userInfoParsed;

    }
}