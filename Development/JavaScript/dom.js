const heading =
    document.querySelector("h1");

console.log(heading);

heading.style.color =
    "orange";

const button =
    document.querySelector("button");

button.addEventListener("click", () => {

    console.log(
        "Button Clicked 🚀"
    );
});