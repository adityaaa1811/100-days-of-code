const student = {
    name: "Aditya"
};

const {
    name,
    branch = "CSE"
} = student;

console.log(name);
console.log(branch);