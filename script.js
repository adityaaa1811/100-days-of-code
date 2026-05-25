console.log("Portfolio Loaded 🚀");

/* =========================
   DOM ELEMENTS
========================= */

const body =
    document.body;

const themeButton =
    document.querySelector(
        "#theme-btn"
    );

const navLinks =
    document.querySelectorAll(
        "nav a"
    );

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

const topButton =
    document.querySelector(
        "#top-btn"
    );

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

        setTimeout(
            typeEffect,
            120
        );
    }
}

typeEffect();

/* =========================
   LIGHT MODE FUNCTION
========================= */

function enableLightMode() {

    body.style.backgroundColor =
        "#f5f5f5";

    body.style.color =
        "#111111";

    themeButton.innerText =
        "Dark Theme";

    navLinks.forEach((link) => {

        link.style.color =
            "#111111";
    });

    heroText.forEach((text) => {

        text.style.color =
            "#333333";
    });

    sectionTitles.forEach((title) => {

        title.style.color =
            "#111111";
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

    contactLinks.forEach((link) => {

        link.style.backgroundColor =
            "#ffffff";

        link.style.color =
            "#111111";

        link.style.border =
            "1px solid #dddddd";
    });

    techStacks.forEach((stack) => {

        stack.style.color =
            "#ff6b00";
    });

    heroCard.style.boxShadow =
        "0 0 35px rgba(255, 107, 0, 0.25)";

    localStorage.setItem(
        "theme",
        "light"
    );

    darkMode = false;
}

/* =========================
   DARK MODE FUNCTION
========================= */

function enableDarkMode() {

    body.style.backgroundColor =
        "#0a0a0a";

    body.style.color =
        "#ffffff";

    themeButton.innerText =
        "Light Theme";

    navLinks.forEach((link) => {

        link.style.color =
            "#ffffff";
    });

    heroText.forEach((text) => {

        text.style.color =
            "#b3b3b3";
    });

    sectionTitles.forEach((title) => {

        title.style.color =
            "#ffffff";
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

    contactLinks.forEach((link) => {

        link.style.backgroundColor =
            "#111111";

        link.style.color =
            "#ffffff";

        link.style.border =
            "1px solid #222222";
    });

    techStacks.forEach((stack) => {

        stack.style.color =
            "#ff8533";
    });

    heroCard.style.boxShadow =
        "0 0 40px rgba(255, 107, 0, 0.35)";

    localStorage.setItem(
        "theme",
        "dark"
    );

    darkMode = true;
}

/* =========================
   THEME STORAGE
========================= */

let darkMode = true;

const savedTheme =
    localStorage.getItem(
        "theme"
    );

if (savedTheme === "light") {

    enableLightMode();

} else {

    enableDarkMode();
}

/* =========================
   THEME BUTTON
========================= */

themeButton.addEventListener(
    "click",
    () => {

        if (darkMode) {

            enableLightMode();

        } else {

            enableDarkMode();
        }
    }
);

/* =========================
   SCROLL REVEAL
========================= */

const hiddenElements =
    document.querySelectorAll(
        ".section"
    );

hiddenElements.forEach((el) => {

    el.classList.add(
        "hidden"
    );
});

window.addEventListener(
    "scroll",
    () => {

        hiddenElements.forEach((el) => {

            const rect =
                el.getBoundingClientRect();

            if (
                rect.top <
                window.innerHeight - 100
            ) {

                el.classList.add(
                    "show"
                );
            }
        });
    }
);

/* =========================
   ACTIVE NAVBAR
========================= */

const sections =
    document.querySelectorAll(
        "section"
    );

const navItems =
    document.querySelectorAll(
        "nav a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            if (
                scrollY >=
                sectionTop - 200
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );
            }
        });

        navItems.forEach((link) => {

            link.classList.remove(
                "active"
            );

            if (
                link
                    .getAttribute("href")
                    .includes(current)
            ) {

                link.classList.add(
                    "active"
                );
            }
        });
    }
);

/* =========================
   LOADER
========================= */

window.addEventListener(
    "load",
    () => {

        const loader =
            document.querySelector(
                "#loader"
            );

        loader.style.display =
            "none";
    }
);

/* =========================
   SCROLL TO TOP BUTTON
========================= */

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 300) {

            topButton.style.display =
                "block";

        } else {

            topButton.style.display =
                "none";
        }
    }
);

topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"
        });
    }
);