using MudBlazor;

namespace SoapCapital.Website.Theme;

public static class CustomColors
{
    public static readonly List<string> ThemeColors = new()
    {
        Light.Primary,
        Colors.Amber.Default,
        Colors.Blue.Default,
        Colors.BlueGrey.Default,
        Colors.Brown.Default,
        Colors.Cyan.Default,
        Colors.DeepOrange.Default,
        Colors.DeepPurple.Default,
        Colors.Green.Default,
        Colors.Indigo.Default,
        Colors.LightBlue.Default,
        Colors.Orange.Default,
        Colors.Pink.Default,
        Colors.Purple.Default,
        Colors.Red.Default,
        Colors.Teal.Default
    };

    public static class Light
    {
        public const string Primary = "#e78223";
        public const string Secondary = "#000";
        public const string Tertiary = "#FFF";
        public const string Dark = "#000";
        public const string LightGray = "#f7f7f7";
        public const string Background = "#FFF";
        public const string AppbarBackground = "#FFF";
        public const string Black = "#000";
        public const string AppbarText = "#153838";
    }

    public static class Dark
    {
        public const string Primary = "#e78223";
        public const string Secondary = "#000";
        public const string SecondaryText = "#F2A900";
        public const string Tertiary = "#FFF";
        public const string Background = "#1b1f22";
        public const string AppbarBackground = "#1b1f22";
        public const string DrawerBackground = "#121212";
        public const string Surface = "#202528";
        public const string Disabled = "#545454";
        public const string Black = "#161a1d";
    }
}