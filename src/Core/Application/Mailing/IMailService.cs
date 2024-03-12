using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Mailing;

public interface IMailService : ITransientService
{
    Task SendAsync(MailRequest request);
}