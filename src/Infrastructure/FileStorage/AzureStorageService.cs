using System.Text.RegularExpressions;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeMapping;
using SoapCapital.Application.Common.Enums;
using SoapCapital.Application.FileStorage;
using SoapCapital.Infrastructure.Common.Extensions;

namespace SoapCapital.Infrastructure.FileStorage;

public class AzureStorageService : IFileStorageService
{
    private readonly AzureStorageSettings _settings;
    private readonly ILogger<AzureStorageService> _logger;
    
    public AzureStorageService(IOptions<AzureStorageSettings> settings, ILogger<AzureStorageService> logger)
    {
        _settings = settings.Value;
        _logger = logger;
    }

    public async Task<string> UploadAsync<T>(FileUploadRequest? request, FileType supportedFileType, string containerName, CancellationToken cancellationToken = default)
        where T : class
    {
        if (request == null)
        {
            return string.Empty;
        }
        
        if (!supportedFileType.GetDescriptionList().Contains(request.Extension.ToLower()))
            throw new InvalidOperationException("File Format Not Supported.");

        if (request.Name is null)
            throw new InvalidOperationException("Name is required.");
        
        var base64Data = Regex.Match(request.Data, supportedFileType == FileType.Image ? "data:image/(?<type>.+?),(?<data>.+)" : "data:video/(?<type>.+?),(?<data>.+)").Groups["data"].Value;

        var fileBytes = Convert.FromBase64String(base64Data);
        var fileName = $"{request.Name}{request.Extension}";
        
        var container = new BlobContainerClient(_settings.ConnectionString, containerName);
        var client = container.GetBlobClient(fileName);

        using var stream = new MemoryStream(fileBytes, writable: false);

        try
        {
            var uploadResponse = await client.UploadAsync(
                stream,
                new BlobUploadOptions
                {
                    HttpHeaders = new BlobHttpHeaders
                    {
                        ContentType = MimeUtility.GetMimeMapping(fileName),
                        CacheControl = "31536000"
                    }
                },
                cancellationToken);

            return client.Uri.AbsoluteUri.Replace("blob.core.windows", "azureedge");
        }
        catch (Exception ex)
        {
            var error = ex.Message;
            return string.Empty;
        }
    }

    public async Task Remove(string? path, string containerName)
    {
        if (path != null)
        {
            var container = new BlobContainerClient(_settings.ConnectionString, containerName);
            var file = container.GetBlobClient(path.Replace(containerName, string.Empty));

            if (await file.ExistsAsync())
                await file.DeleteAsync();
        }
    }
}