let number = Math.floor(Math.random() * 100000);
let capacity = Math.floor(Math.log10(number)) + 1;

console.log(number);

const fragmentation = (num, cap) => {
    let tmpNumber = num;

    for (let i = Math.pow(10, cap - 1); i >= 1; i = Math.floor(i / 10)) {
        console.log(Math.floor(tmpNumber / i));
        tmpNumber %= i;
    }
};

fragmentation(number, capacity);

