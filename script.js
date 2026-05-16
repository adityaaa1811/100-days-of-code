console.log("Modern Portfolio Loaded 🚀");

/* Simple Fade Animation */

const cards = document.querySelectorAll(
    ".skill-card, .project-card"
);

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});