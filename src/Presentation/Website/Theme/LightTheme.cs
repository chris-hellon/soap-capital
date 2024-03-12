using MudBlazor;

namespace SoapCapital.Website.Theme;

public class LightTheme : MudTheme
{
    public LightTheme()
    {
        Palette = new PaletteLight
        {
            Primary = CustomColors.Light.Primary,
            Secondary = CustomColors.Light.Secondary,
            Tertiary = CustomColors.Light.Tertiary,
            Dark = CustomColors.Light.Dark,
            Black = CustomColors.Light.Black,
            Background = CustomColors.Light.Background,
            AppbarBackground = CustomColors.Light.AppbarBackground,
            AppbarText = CustomColors.Light.AppbarText,
            DrawerBackground = CustomColors.Light.AppbarBackground,
            GrayLight = CustomColors.Light.LightGray,
            DrawerText = "rgba(0,0,0, 0.7)",
            Success = CustomColors.Light.Primary,
            TableLines = "#e0e0e029",
            OverlayDark = "hsl(0deg 0% 0% / 75%)"
        };
        LayoutProperties = new LayoutProperties
        {
            DefaultBorderRadius = "5px",
            DrawerWidthLeft = "400px"
        };
        
        Typography = CustomTypography.SoapCapitalTypography;
        Shadows = new Shadow();
        ZIndex = new ZIndex { Drawer = 1300, Dialog = 2000000000};
    }
}