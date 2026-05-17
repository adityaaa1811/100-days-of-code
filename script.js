console.log("Portfolio Loaded 🚀");

const themeButton =
    document.querySelector("#theme-btn");

const body =
    document.body;

const navLinks =
    document.querySelectorAll("nav a");

const heroText =
    document.querySelectorAll(
        ".hero-description, .section-text"
    );

const sectionTitles =
    document.querySelectorAll(
        ".section-title"
    );

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

const sections =
    document.querySelectorAll(
        ".section"
    );

let darkMode = true;

themeButton.addEventListener("click", () => {

    if (darkMode) {

        /* LIGHT MODE */

        body.style.backgroundColor =
            "#f5f5f5";

        body.style.color =
            "#111111";

        themeButton.innerText =
            "Dark Theme";

        navLinks.forEach((link) => {
            link.style.color = "#111111";
        });

        heroText.forEach((text) => {
            text.style.color = "#333333";
        });

        sectionTitles.forEach((title) => {
            title.style.color = "#111111";
        });

        sections.forEach((section) => {
            section.style.backgroundColor =
                "transparent";
        });

        skillCards.forEach((card) => {

            card.style.backgroundColor =
                "#ffffff";

            card.style.color =
                "#111111";

            card.style.border =
                "1px solid #dddddd";
        });

        projectCards.forEach((card) => {

            card.style.backgroundColor =
                "#ffffff";

            card.style.color =
                "#111111";

            card.style.border =
                "1px solid #dddddd";
        });

        darkMode = false;

    } else {

        /* DARK MODE */

        body.style.backgroundColor =
            "#0a0a0a";

        body.style.color =
            "#ffffff";

        themeButton.innerText =
            "Light Theme";

        navLinks.forEach((link) => {
            link.style.color = "#ffffff";
        });

        heroText.forEach((text) => {
            text.style.color = "#b3b3b3";
        });

        sectionTitles.forEach((title) => {
            title.style.color = "#ffffff";
        });

        sections.forEach((section) => {
            section.style.backgroundColor =
                "transparent";
        });

        skillCards.forEach((card) => {

            card.style.backgroundColor =
                "#111111";

            card.style.color =
                "#ffffff";

            card.style.border =
                "1px solid #222222";
        });

        projectCards.forEach((card) => {

            card.style.backgroundColor =
                "#111111";

            card.style.color =
                "#ffffff";

            card.style.border =
                "1px solid #222222";
        });

        darkMode = true;
    }

});