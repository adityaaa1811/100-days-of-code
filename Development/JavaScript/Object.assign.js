const user = {

    name: "Aditya"
};

const details = {

    branch: "CSE"
};

const result = Object.assign(
    {},
    user,
    details
);

console.log(result);