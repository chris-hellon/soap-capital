namespace SoapCapital.Website.Theme;

public static class TinyMceConfig
{
    public static Dictionary<string, object> Styles(bool darkMode, int height = 400) =>
        new()
        {
            { "content_style", "@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap'); body { font-family: \"Source Code Pro\", sans-serif; font-weight:400; } h1, h2, h3, h4, h5, h6 {font-weight:900; } h1,h2,h3,h4,h5,h6 { font-family: \"Source Code Pro\", sans-serif; }" + (darkMode ? ".mce-content-body { color:rgba(255,255,255,0.6980392156862745); background-color: rgba(32,37,40,1) !important; }" : "")},
            { "font_formats", "Source Code Pro=sourcecodepro;"},
            { "toolbar", "undo redo | styleselect formatselect styles forecolor backcolor | bold italic underline | link | bullist numlist outdent indent | alignleft aligncenter alignright alignjustify | preview"},
            { "menubar", "edit format insert"},
            {"plugins", "preview advlist lists"},
            { "branding", false},
            { "height", $"{height.ToString()}" },
            { "block_formats", "Paragraph=p; Heading 4=h4; Heading 5=h5; Heading 6=h6"},
            { "format", "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat" },
            { "skin", $"oxide{(darkMode ? "-dark" : "")}"},
            { "content_css", "/css/tinymce.min.css"}
        };
    public static readonly string ApiKey = "zdyvkmy3tesz0a0vsvxfnrn5039f1gt6ex9kp3b3xjiud6ah";
}