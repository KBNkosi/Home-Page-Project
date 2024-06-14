document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.getElementById("dark-mode");
    const lightModeBtn = document.getElementById("light-mode");
    const themeStyleSheet = document.getElementById("theme-style");

    darkModeBtn.addEventListener("click", function () {
        themeStyleSheet.href = "dark-mode.css";
        document.getElementById("brand-icon").src = "./public/alarado-icon-homepage-dark.svg";
        document.getElementById("moon-image").src="./public/Moon_fill_light.svg";

    });

    lightModeBtn.addEventListener("click", function () {
        themeStyleSheet.href = "light-mode.css"
    });

})