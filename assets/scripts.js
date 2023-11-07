const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");
const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style);

const darkMode = {
    bg: getStyle(html, "--bg"),
    textcolor: getStyle(html, "--textcolor")
};

const lightMode  = {
    bg: "#fff",
    textcolor: "#111"
};

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    );
};

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(lightMode) : changeColors(darkMode);
});

