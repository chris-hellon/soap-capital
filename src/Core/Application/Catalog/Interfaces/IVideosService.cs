using SoapCapital.Application.Catalog.Videos.Commands;
using SoapCapital.Application.Catalog.Videos.Dto;
using SoapCapital.Application.Catalog.Videos.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Catalog.Interfaces;

public interface IVideosService : ITransientService
{
    Task<IEnumerable<VideoDto>> GetVideos(GetVideosRequest request);
    
    Task<VideoDto> GetVideo(int id);

    Task<int> CreateVideo(CreateVideoRequest request);

    Task<int> UpdateVideo(UpdateVideoRequest request);

    Task DeleteVideo(int id);
}