const nums = [1, 2, 3, 4];

/* MAP */

const squared = nums.map((num) => {

    return num * num;
});

console.log(
    "Squared Numbers:",
    squared
);

/* FILTER */

const even = nums.filter((num) => {

    return num % 2 === 0;
});

console.log(
    "Even Numbers:",
    even
);