const user = {

    name: "Aditya"
};

Object.freeze(user);

user.name = "Rahul";

console.log(user);