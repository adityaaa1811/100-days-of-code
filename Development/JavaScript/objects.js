const student = {

    name: "Aditya",

    age: 18,

    skills: [
        "C++",
        "DSA",
        "JavaScript"
    ],

    greet: function () {

        console.log(
            "Hello, I am " + this.name
        );
    }
};

console.log(student.name);

console.log(student.skills);

student.greet();