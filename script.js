console.log("Portfolio Loaded 🚀");

const themeButton =
    document.querySelector("#theme-btn");

const skillCards =
    document.querySelectorAll(".skill-card");

const projectCards =
    document.querySelectorAll(".project-card");

const sections =
    document.querySelectorAll(".section");

let darkMode = true;

themeButton.addEventListener("click", () => {

    if (darkMode) {

        /* LIGHT MODE */

        document.body.style.backgroundColor =
            "#f5f5f5";

        document.body.style.color =
            "#111111";

        themeButton.innerText =
            "Dark Theme";

        sections.forEach((section) => {
            section.style.backgroundColor =
                "#ffffff";
        });

        skillCards.forEach((card) => {

            card.style.backgroundColor =
                "#ffffff";

            card.style.color =
                "#111111";

            card.style.border =
                "1px solid #ddd";
        });

        projectCards.forEach((card) => {

            card.style.backgroundColor =
                "#ffffff";

            card.style.color =
                "#111111";

            card.style.border =
                "1px solid #ddd";
        });

        darkMode = false;

    } else {

        /* DARK MODE */

        document.body.style.backgroundColor =
            "#0a0a0a";

        document.body.style.color =
            "#ffffff";

        themeButton.innerText =
            "Light Theme";

        sections.forEach((section) => {
            section.style.backgroundColor =
                "transparent";
        });

        skillCards.forEach((card) => {

            card.style.backgroundColor =
                "#111";

            card.style.color =
                "#ffffff";

            card.style.border =
                "1px solid #222";
        });

        projectCards.forEach((card) => {

            card.style.backgroundColor =
                "#111";

            card.style.color =
                "#ffffff";

            card.style.border =
                "1px solid #222";
        });

        darkMode = true;
    }

});