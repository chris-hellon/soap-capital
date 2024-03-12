using MudBlazor;

namespace SoapCapital.Website.Theme;

public static class CustomTypography
{
    public static Typography SoapCapitalTypography => new()
    {
        Default = new Default
        {
            FontFamily = ["Source Code Pro", "Lato", "Montserrat", "Helvetica", "Arial", "sans-serif"],
            FontSize = "1rem",
            FontWeight = 400,
            LineHeight = 1.43,
            LetterSpacing = ".01071em"
        },
        H1 = new H1
        {
            FontFamily = ["Source Code Pro", "Helvetica", "Arial", "sans-serif"],
            FontSize = "2.25rem",
            FontWeight = 600,
            LineHeight = 1.167,
            LetterSpacing = "-.01562em",
            TextTransform = "uppercase"
        },
        H2 = new H2
        {
            FontFamily = ["Source Code Pro", "Helvetica", "Arial", "sans-serif"],
            FontSize = "2rem",
            FontWeight = 600,
            LineHeight = 1.2,
            LetterSpacing = "-.00833em"
        },
        H3 = new H3
        {
            FontFamily = ["Source Code Pro", "Helvetica", "Arial", "sans-serif"],
            FontSize = "1.75rem",
            FontWeight = 600,
            LineHeight = 1.167,
            LetterSpacing = ".0091em"
        },
        H4 = new H4
        {
            FontFamily = ["Source Code Pro", "Helvetica", "Arial", "sans-serif"],
            FontSize = "1.5rem",
            FontWeight = 600,
            LineHeight = 1.6,
            LetterSpacing = ".00735em"
        },
        H5 = new H5
        {
            FontFamily = ["Source Code Pro", "Helvetica", "Arial", "sans-serif"],
            FontSize = "1.25rem",
            FontWeight = 600,
            LineHeight = 1.45,
            LetterSpacing = "0"
        },
        H6 = new H6
        {
            FontFamily = ["Source Code Pro", "Helvetica", "Arial", "sans-serif"],
            FontSize = "1.1rem",
            FontWeight = 600,
            LineHeight = 1.3,
            LetterSpacing = ".1em"
        },
        Button = new Button
        {
            FontFamily = ["Source Code Pro", "Helvetica", "Arial", "sans-serif"],
            FontSize = "1.1rem",
            FontWeight = 600,
            LineHeight = 1.75,
            LetterSpacing = ".1em"
        },
        Body1 = new Body1
        {
            FontFamily = ["Source Code Pro", "Lato", "Montserrat", "Helvetica", "Arial", "sans-serif"],
            FontSize = "1rem",
            FontWeight = 400,
            LineHeight = 1.5,
            LetterSpacing = ".00938em"
        },
        Body2 = new Body2
        {
            FontFamily = ["Source Code Pro", "Lato", "Montserrat", "Helvetica", "Arial", "sans-serif"],
            FontSize = ".875rem",
            FontWeight = 400,
            LineHeight = 1.43,
            LetterSpacing = ".01071em"
        },
        Caption = new Caption
        {
            FontFamily = ["Source Code Pro", "Lato", "Montserrat", "Helvetica", "Arial", "sans-serif"],
            FontSize = ".75rem",
            FontWeight = 200,
            LineHeight = 1.66,
            LetterSpacing = ".03333em"
        },
        Subtitle1 = new Subtitle1
        {
            FontFamily = ["Source Code Pro", "Lato", "Montserrat", "Helvetica", "Arial", "sans-serif"],
            FontSize = "0.85rem",
            FontWeight = 700,
            LineHeight = 1.57,
            LetterSpacing = ".00714em"
        },
        Subtitle2 = new Subtitle2
        {
            FontFamily = ["Source Code Pro", "Lato", "Montserrat", "Helvetica", "Arial", "sans-serif"],
            FontSize = ".83rem",
            FontWeight = 400,
            LineHeight = 1.57,
            LetterSpacing = ".00714em"
        }
    };
}