using Newtonsoft.Json;

namespace SoapCapital.Application.Bybit.Dto;

public class GetAffiliateUsersResponseDto
{
    [JsonProperty("retCode")]
    public int RetCode { get; set; }
    
    [JsonProperty("retMsg")]
    public string? RetMsg { get; set; }
    
    [JsonProperty("result")]
    public GetAffiliateUsersResponseResultDto? Result { get; set; }
    
    [JsonProperty("retExtInfo")]
    public object? RetExtInfo { get; set; }
    
    [JsonProperty("time")]
    public long Time { get; set; }
}

public class GetAffiliateUsersResponseResultDto
{
    [JsonProperty("uid")]
    public string? Uid { get; set; }
    
    [JsonProperty("depositAmount365Day")]
    public decimal DepositAmount365Day { get; set; }
}

// "retCode": 0,
// "retMsg": "",
// "result": {
//     "uid": "151735210",
//     "takerVol30Day": "13675.78282",
//     "makerVol30Day": "4859.674",
//     "tradeVol30Day": "18535.45682",
//     "depositAmount30Day": "200",
//     "takerVol365Day": "13675.78282",
//     "makerVol365Day": "4859.674",
//     "tradeVol365Day": "18535.45682",
//     "depositAmount365Day": "200",
//     "totalWalletBalance": "3",
//     "depositUpdateTime": "2024-03-10 00:00:00",
//     "vipLevel": "0",
//     "volUpdateTime": "2024-03-10 00:00:00"
// },
// "retExtInfo": {},
// "time": 1710042365663
