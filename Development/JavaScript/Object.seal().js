const user = {
    name: "Aditya"
};

Object.seal(user);

user.name = "Aditya Mishra"; // allowed

user.age = 19; // not allowed

console.log(user);