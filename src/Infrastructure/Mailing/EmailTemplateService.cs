using System.Text;
using RazorEngineCore;
using SoapCapital.Application.Mailing;

namespace SoapCapital.Infrastructure.Mailing;

public class EmailTemplateService : IEmailTemplateService
{
    public string GenerateEmailTemplate<T>(string templateName, T mailTemplateModel)
    {
        var template = GetTemplate(templateName);

        var razorEngine = new RazorEngine();
        var modifiedTemplate = razorEngine.Compile(template);

        return modifiedTemplate.Run(mailTemplateModel);
    }

    private static string GetTemplate(string templateName)
    {
        const string emailTemplatesDirectory = "EmailTemplates";
        var filePath = Path.Combine(emailTemplatesDirectory, $"{templateName}.cshtml");

        using var fs = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
        using var sr = new StreamReader(fs, Encoding.Default);
        var mailText = sr.ReadToEnd();
        sr.Close();

        return mailText;
    }
}