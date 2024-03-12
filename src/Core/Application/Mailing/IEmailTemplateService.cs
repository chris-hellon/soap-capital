using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Mailing;

public interface IEmailTemplateService : ITransientService
{
    string GenerateEmailTemplate<T>(string templateName, T mailTemplateModel);
}