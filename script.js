console.log("Portfolio Loaded 🚀");

/* =========================
   TYPING ANIMATION
========================= */

const text =
    "Software Engineer";

let index = 0;

function typeEffect() {

    const typingText =
        document.querySelector(
            "#typing-text"
        );

    if (index < text.length) {

        typingText.innerHTML +=
            text.charAt(index);

        index++;

        setTimeout(typeEffect, 120);
    }
}

typeEffect();

/* =========================
   THEME TOGGLE
========================= */

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

const contactLinks =
    document.querySelectorAll(
        ".contact-links a"
    );

const techStacks =
    document.querySelectorAll(
        ".tech-stack"
    );

const heroCard =
    document.querySelector(
        ".hero-card"
    );

let darkMode = true;

themeButton.addEventListener("click", () => {

    if (darkMode) {

        /* =========================
           LIGHT MODE
        ========================= */

        body.style.backgroundColor =
            "#f5f5f5";

        body.style.color =
            "#111111";

        themeButton.innerText =
            "Dark Theme";

        /* NAV LINKS */

        navLinks.forEach((link) => {

            link.style.color =
                "#111111";
        });

        /* HERO + SECTION TEXT */

        heroText.forEach((text) => {

            text.style.color =
                "#333333";
        });

        /* SECTION TITLES */

        sectionTitles.forEach((title) => {

            title.style.color =
                "#111111";
        });

        /* SKILL CARDS */

        skillCards.forEach((card) => {

            card.style.backgroundColor =
                "#ffffff";

            card.style.color =
                "#111111";

            card.style.border =
                "1px solid #dddddd";
        });

        /* PROJECT CARDS */

        projectCards.forEach((card) => {

            card.style.backgroundColor =
                "#ffffff";

            card.style.color =
                "#111111";

            card.style.border =
                "1px solid #dddddd";
        });

        /* CONTACT LINKS */

        contactLinks.forEach((link) => {

            link.style.backgroundColor =
                "#ffffff";

            link.style.color =
                "#111111";

            link.style.border =
                "1px solid #dddddd";
        });

        /* TECH STACK */

        techStacks.forEach((stack) => {

            stack.style.color =
                "#ff6b00";
        });

        /* HERO CARD */

        heroCard.style.boxShadow =
            "0 0 35px rgba(255, 107, 0, 0.25)";

        darkMode = false;

    } else {

        /* =========================
           DARK MODE
        ========================= */

        body.style.backgroundColor =
            "#0a0a0a";

        body.style.color =
            "#ffffff";

        themeButton.innerText =
            "Light Theme";

        /* NAV LINKS */

        navLinks.forEach((link) => {

            link.style.color =
                "#ffffff";
        });

        /* HERO + SECTION TEXT */

        heroText.forEach((text) => {

            text.style.color =
                "#b3b3b3";
        });

        /* SECTION TITLES */

        sectionTitles.forEach((title) => {

            title.style.color =
                "#ffffff";
        });

        /* SKILL CARDS */

        skillCards.forEach((card) => {

            card.style.backgroundColor =
                "#111111";

            card.style.color =
                "#ffffff";

            card.style.border =
                "1px solid #222222";
        });

        /* PROJECT CARDS */

        projectCards.forEach((card) => {

            card.style.backgroundColor =
                "#111111";

            card.style.color =
                "#ffffff";

            card.style.border =
                "1px solid #222222";
        });

        /* CONTACT LINKS */

        contactLinks.forEach((link) => {

            link.style.backgroundColor =
                "#111111";

            link.style.color =
                "#ffffff";

            link.style.border =
                "1px solid #222222";
        });

        /* TECH STACK */

        techStacks.forEach((stack) => {

            stack.style.color =
                "#ff8533";
        });

        /* HERO CARD */

        heroCard.style.boxShadow =
            "0 0 40px rgba(255, 107, 0, 0.35)";

        darkMode = true;
    }
});
const hiddenElements =
    document.querySelectorAll(
        ".section"
    );

hiddenElements.forEach((el) => {

    el.classList.add("hidden");
});

window.addEventListener("scroll", () => {

    hiddenElements.forEach((el) => {

        const rect =
            el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {

            el.classList.add("show");
        }
    });
});