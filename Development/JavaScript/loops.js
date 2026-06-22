const skills = [

    "C++",
    "DSA",
    "JavaScript",
    "React"
];

/* FOR LOOP */

for (
    let i = 0;
    i < skills.length;
    i++
) {

    console.log(
        skills[i]
    );
}

/* FOR...OF */

for (const skill of skills) {

    console.log(
        "Learning:",
        skill
    );
}