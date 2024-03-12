using SoapCapital.Application.Common.Enums;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.FileStorage;

public interface IFileStorageService : ITransientService
{
    public Task<string>  UploadAsync<T>(FileUploadRequest? request, FileType supportedFileType, string containerName, CancellationToken cancellationToken = default)
    where T : class;

    public Task Remove(string? path, string containerName);
}