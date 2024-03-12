using System.ComponentModel;

namespace SoapCapital.Application.Common.Enums;

public enum FileType
{
    [Description(".jpg,.png,.jpeg,.webp,.avif")]
    Image,
    [Description(".mp4,.mov,.avi,.wmv,.webm")]
    Video
}