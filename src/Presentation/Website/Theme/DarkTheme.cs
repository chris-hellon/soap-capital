using MudBlazor;

namespace SoapCapital.Website.Theme;

public class DarkTheme : MudTheme
{
    public DarkTheme()
    {
        Palette = new PaletteDark
        {
            Primary = CustomColors.Dark.Primary,
            Secondary = CustomColors.Dark.Black,
            Success = CustomColors.Dark.Primary,
            Tertiary = CustomColors.Light.Tertiary,
            Black = CustomColors.Dark.Black,
            Background = CustomColors.Dark.Background,
            Surface = CustomColors.Dark.Surface,
            DrawerBackground = CustomColors.Dark.DrawerBackground,
            DrawerText = "rgba(255,255,255, 0.50)",
            AppbarBackground = CustomColors.Dark.AppbarBackground,
            AppbarText = "rgba(255,255,255, 0.70)",
            TextPrimary = "rgba(255,255,255, 0.70)",
            TextSecondary = "rgba(255,255,255, 0.50)",
            ActionDefault = "#adadb1",
            ActionDisabled = "rgba(255,255,255, 0.26)",
            ActionDisabledBackground = "rgba(255,255,255, 0.12)",
            DrawerIcon = "rgba(255,255,255, 0.50)",
            TableLines = "#e0e0e036",
            Dark = CustomColors.Dark.DrawerBackground,
            GrayLight =  CustomColors.Dark.Background,
            Divider = "#e0e0e036",
            OverlayDark = "hsl(0deg 0% 0% / 75%)",
            TextDisabled = CustomColors.Dark.Disabled
        };

        LayoutProperties = new LayoutProperties
        {
            DefaultBorderRadius = "5px",
            DrawerWidthLeft = "400px"
        };

        Typography = CustomTypography.SoapCapitalTypography;
        Shadows = new Shadow();
        ZIndex = new ZIndex { Drawer = 1300, Dialog = 2000000000 };
    }
}