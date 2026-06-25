const prices = [100, 200, 300, 400];

const total = prices.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(total);