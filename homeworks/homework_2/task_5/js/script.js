let number = Math.floor(Math.random() * 1000);

console.log(number);
console.log(Boolean(number % 2) && Math.floor(Math.log10(number)) + 1 === 3);