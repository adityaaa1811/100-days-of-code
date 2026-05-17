console.log("Portfolio Loaded 🚀");

const themeButton =
    document.querySelector("#theme-btn");

let darkMode = true;

themeButton.addEventListener("click", () => {

    if (darkMode) {

        document.body.style.backgroundColor =
            "#ffffff";

        document.body.style.color =
            "#000000";

        themeButton.innerText =
            "Dark Theme";

        darkMode = false;

    } else {

        document.body.style.backgroundColor =
            "#0a0a0a";

        document.body.style.color =
            "#ffffff";

        themeButton.innerText =
            "Light Theme";

        darkMode = true;
    }

});