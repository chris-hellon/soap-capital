using System.ComponentModel.DataAnnotations;

namespace SoapCapital.Application.FileStorage;

public class FileUploadRequest
{
    [Required(ErrorMessage = "Image Name cannot be empty!")]
    [MinLength(150)]
    public string Name { get; set; } = default!;
    
    [Required(ErrorMessage = "Image Extension cannot be empty!")]
    [MaxLength(5)]
    public string Extension { get; set; } = default!;
    
    [Required(ErrorMessage = "Image Data cannot be empty!")]
    public string Data { get; set; } = default!;
}