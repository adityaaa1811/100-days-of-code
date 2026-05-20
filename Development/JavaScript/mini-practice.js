const nums = [1, 2, 3, 4];

const squared = nums.map((num) => {

    return num * num;
});

console.log(squared);

const even = nums.filter((num) => {

    return num % 2 === 0;
});

console.log(even);