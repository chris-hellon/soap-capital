using System.Text;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Catalog.Users.Queries;
using SoapCapital.Application.Mailing;

namespace SoapCapital.Application.Catalog.Users.Commands;

public class SendExpiryEmailRequest : IRequest
{
}

internal class SendExpiryEmailRequestHandler : IRequestHandler<SendExpiryEmailRequest>
{
    private readonly IUsersService _usersService;
    private readonly IMailService _mailService;

    public SendExpiryEmailRequestHandler(IUsersService usersService, IMailService mailService)
    {
        _usersService = usersService;
        _mailService = mailService;
    }

    public async Task Handle(SendExpiryEmailRequest request, CancellationToken cancellationToken)
    {
        var expiringUsers = await _usersService.GetExpiringUsers(new GetExpiringUsersRequest());
        var users = expiringUsers as UserDto[] ?? expiringUsers.ToArray();

        if (users.Length != 0)
        {
            var mailRequest = new MailRequest(
                to: ["chrisghellon@gmail.com"],
                subject: "Expiring Users Reminder",
                body: GenerateEmailHtml(users));

            await _mailService.SendAsync(mailRequest);
        }
    }

    public string GenerateEmailHtml(IEnumerable<UserDto> users)
    {
        var html = new StringBuilder();
        html.Append(@"
<!DOCTYPE html>
<html lang=""en"" xmlns=""http://www.w3.org/1999/xhtml"" xmlns:v=""urn:schemas-microsoft-com:vml"" xmlns:o=""urn:schemas-microsoft-com:office:office"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 auto; padding: 0; width: 100%;"">
<head>
    <meta charset=""utf-8""> <!-- utf-8 works for most cases -->
    <meta name=""viewport"" content=""width=device-width""> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv=""X-UA-Compatible"" content=""IE=edge""> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name=""x-apple-disable-message-reformatting""> <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

    <link href=""https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"" rel=""stylesheet"">
    <script src=""https://kit.fontawesome.com/ec8b570ee5.js"" crossorigin=""anonymous"" async></script>

    <style type=""text/css"">
        @@media screen and (max-width:600px) {
            h3 {
                font-size: 0.8rem !important;
            }

            h2 {
                font-size: 1rem !important;
            }

            p, .view-post-button {
                font-size: 0.7rem !important;
            }

            .footer p, .navigation a {
                font-size: 0.6rem !important;
            }

            .footer ul li {
                font-size: 0.6rem !important;
            }
        }
    </style>
</head>

<body width=""100%"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #f1f1f1; font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 15px; line-height: 1.8; letter-spacing: 6px; color: rgba(0,0,0,.4); mso-line-height-rule: exactly; margin: 0 auto; height: 100%; width: 100%; padding: 0;"">
<center style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; width: 100%; background-color: #f1f1f1;"">
    <div style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: none; font-size: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;"">
        &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; max-width: 600px; margin: 0 auto;"" class=""email-container"">
        <!-- BEGIN BODY -->
        <table align=""center"" role=""presentation"" cellspacing=""0"" cellpadding=""0"" border=""0"" width=""100%"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; table-layout: fixed; margin: 0 auto;"">
            <tr style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"">
                <td valign=""top"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 1em 2.5em;  background: #000000; color: rgba(255,255,255,.5); mso-table-lspace: 0pt; mso-table-rspace: 0pt;"">
                    <table role=""presentation"" border=""0"" cellpadding=""0"" cellspacing=""0"" width=""100%"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; table-layout: fixed; margin: 0 auto;"">
                        <tr style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"">
                            <td width=""30%"" class=""logo"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"" align=""left"">
                                <a href=""https://soap.capital"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: #f5564e;"">
                                    <img src=""https://paperstreetsoap.azureedge.net/site/logo.png"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; height: 40px;"" height=""40"">
                                </a>
                            </td>
                            <td width=""70%"" class=""logo"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: right; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"" align=""right"">
                                <ul class=""navigation"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0;"">
                                    <li style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; list-style: none; display: inline-block; font-weight: 500; margin-left: 15px; font-size: 0.75rem; letter-spacing: 6px;"">
                                        <a href=""https://soap.capital"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: #ffffff;"">Home</a>
                                    </li>
                                    <li style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; list-style: none; display: inline-block; font-weight: 500; margin-left: 15px; font-size: 0.75rem; letter-spacing: 6px;"">
                                        <a href=""https://soap.capital/login"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: #ffffff;"">Members</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr><!-- end tr -->
            <tr style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"">
                <td class=""bg_black email-section"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 2.5em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"" align=""center"">
                    <div class=""heading-section heading-section-white"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.8);"">
                        <h2 style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 6px; font-size: 1.5rem; margin: 0; line-height: 1.5; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;"">Expiring Users.</h2>
                    </div>
                </td>
            </tr><!-- end: tr -->
            <tr style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"">
                <td class=""bg_black email-section"" style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding               -bottom: 2em; padding-top:1.5em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""" align=""""center"""">
                    <div class=""""heading-section heading-section-white"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.8);"""">
                        <p style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;"""">The following users are set to expire within the next 7 days.</p>
                    </div>
                </td>
            </tr><!-- end: tr -->
        </table>
        <table align=""""center"""" role=""""presentation"""" cellspacing=""""0"""" cellpadding=""""0"""" border=""""0"""" width=""""100%"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; table-layout: fixed; margin: 0 auto;"""">
            <thead>
                <tr style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"""">
                    <th class=""""bg_black email-section"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""" align=""""center"""">
                        <div class=""""heading-section heading-section-white"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.8);"""">
                            <p style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1.4; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;""""><strong>Username</strong></p>
                        </div>
                    </th>
                    <th class=""""bg_black email-section"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""" align=""""center"""">
                        <div class=""""heading-section heading-section-white"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.8);"""">
                            <p style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1.4; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;""""><strong>Email Address</strong></p>
                        </div>
                    </th>
                    <th class=""""bg_black email-section"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""" align=""""center"""">
                        <div class=""""heading-section heading-section-white"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.8);"""">
                            <p style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1.4; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;""""><strong>Discord Username</strong></p>
                        </div>
                    </th>
                    <th class=""""bg_black email-section"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""" align=""""center"""">
                        <div class=""""heading-section heading-section-white"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.8);"""">
                            <p style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1.4; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;""""><strong>Expiry Date</strong></p>
                        </div>
                    </th>
                    <th class=""""bg_black email-section"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""" align=""""center"""">
                        <div class=""""heading-section heading-section-white"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.8);"""">
                            <p style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1.4; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;""""><strong>Expires In (days)</strong></p>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>");

        foreach (var user in users)
        {
            html.Append($@"
            <tr style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"">
                <td style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"" align=""center"">
                    <p style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1.4; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;"">{user.UserName}</p>
                </td>
                <td style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"" align=""center"">
                    <p style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1.4; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;"">{user.Email}</p>
                </td>
                <td style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"" align=""center"">
                    <p style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1.4; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;"">{user.DiscordUserName}</p>
                </td>
                <td style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"" align=""center"">
                    <p style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1.4; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;"">{user.SubscriptionEndDate}</p>
                </td>
                <td style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"" align=""center"">
                    <p style=""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 2px; font-size: 1rem; margin: 0; line-height: 1.4; font-weight: 500; font-family: 'Montserrat', sans-serif; padding-bottom: 0; color: #000000;"">{(user.DaysUntilExpiry < 0 || user.DaysUntilExpiry == null ? "-" : user.DaysUntilExpiry.ToString())}</p>
                </td>
            </tr>");
        }

        html.Append(@"
            </tbody>
        </table>
        <table align=""""center"""" role=""""presentation"""" cellspacing=""""0"""" cellpadding=""""0"""" border=""""0"""" width=""""100%"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; table-layout: fixed; margin: 0 auto;"""">
            <tr style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"""">
                <td valign=""""middle"""" class=""""bg_primary footer email-section"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 2.5em; background-color: #e78223; color: #000000; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""" bgcolor=""""#e78223"""">
                    <table style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; table-layout: fixed; margin: 0 auto;"""">
                        <tr style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"""">
                            <td valign=""""top"""" width=""""60%"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""">
                                <table role=""""presentation"""" cellspacing=""""0"""" cellpadding=""""0"""" border=""""0"""" width=""""100%"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; table-layout: fixed; margin: 0 auto;"""">
                                    <tr style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"""">
                                        <td style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: left; padding-right: 10px; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""" align=""""left"""">
                                            <h3 class=""""heading"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Montserrat', sans-serif; margin-top: 0; font-weight: 500; letter-spacing: 6px; color: #ffffff; font-size: 1.2rem;"""">Quick Links</h3>
                                            <ul style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; padding: 0;"""">
                                                <li style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 3px; list-style: none; margin-bottom: 10px; color: #ffffff; font-size: 0.75rem;"""">
                                                    <a href=""""https://soap.capital/about"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,1);"""">About</a>
                                                </li>
                                                <li style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 3px; list-style: none; margin-bottom: 10px; color: #ffffff; font-size: 0.75rem;"""">
                                                    <a href=""""https://soap.capital/terms-and-conditions"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,1);"""">Terms & Conditions</a>
                                                </li>
                                                <li style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 3px; list-style: none; margin-bottom: 10px; color: #ffffff; font-size: 0.75rem;"""">
                                                    <a href=""""https://soap.capital/dislaimer"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,1);"""">Disclaimer</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td valign=""""top"""" width=""""40%"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""">
                                <table role=""""presentation"""" cellspacing=""""0"""" cellpadding=""""0"""" border=""""0"""" width=""""100%"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; table-layout: fixed; margin: 0 auto;"""">
                                    <tr style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"""">
                                        <td style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: right; padding-left: 5px; padding-right: 5px; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""" align=""""left"""">
                                            <h3 class=""""heading"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Montserrat', sans-serif; margin-top: 0; font-weight: 500; letter-spacing: 6px; color: #ffffff; font-size: 1.2rem;"""">Socials</h3>
                                            <ul class=""""social"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; padding: 0;"""">
                                                <li style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 3px; display: inline-block; list-style: none; margin-bottom: 10px; color: #ffffff; font-size: 0.75rem;"""">
                                                    <a href=""""https://twitter.com/TylerDurden"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,1);"""">
                                                        <img id=""""substack-logo"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; height: 10px;"""" src=""""https://paperstreetsoap.azureedge.net/site/twitter-logo-white.webp"""" alt=""""Substack logo"""" height=""""10"""">
                                                    </a>
                                                </li>
                                                <li style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 3px; display: inline-block; list-style: none; margin-bottom: 10px; color: #ffffff; font-size: 0.75rem;"""">
                                                    <a href=""""https://www.youtube.com/@@SoapCapital"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,1);"""">
                                                        <img id=""""substack-logo"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; height: 10px;"""" src=""""https://paperstreetsoap.azureedge.net/site/youtube-logo-white.webp"""" alt=""""Substack logo"""" height=""""10"""">
                                                    </a>
                                                </li>
                                                <li style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 3px; display: inline-block; list-style: none; margin-bottom: 10px; color: #ffffff; font-size: 0.75rem; padding-right:6px"""">
                                                    <a href=""""https://tylerdurden.substack.com/?utm_source=substack&utm_medium                        =web&utm_campaign=reader2?utm_source=%2Fsearch%2Ftyler%2520durden&utm_medium=reader2"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,1);"""">
                                                        <img id=""""substack-logo"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; height: 10px;"""" src=""""https://paperstreetsoap.azureedge.net/site/substack-white.webp"""" alt=""""Substack logo"""" height=""""10"""">
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr><!-- end: tr -->
            <tr style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"""">
                <td valign=""""middle"""" class=""""bg_black footer email-section"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #000000; padding: 2.5em; color: rgba(255,255,255,.5); mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""">
                    <table style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; table-layout: fixed; margin: 0 auto;"""">
                        <tr style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"""">
                            <td valign=""""top"""" width=""""100%"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""">
                                <table role=""""presentation"""" cellspacing=""""0"""" cellpadding=""""0"""" border=""""0"""" width=""""100%"""" style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; table-layout: fixed; margin: 0 auto;"""">
                                    <tr style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"""">
                                        <td style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: left; padding-right: 10px; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"""" align=""""left"""">
                                            <p style=""""-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; letter-spacing: 3px; color: #ffffff; font-size: 0.75rem;"""">&copy; Soap Capital Ltd.</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</center>
</body>
</html>");
        return html.ToString();
    }
}