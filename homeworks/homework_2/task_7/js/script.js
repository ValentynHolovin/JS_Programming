let arr = [];

arr.push(Math.floor(Math.random() * 100));
arr.push("Random string " + Math.floor(Math.random() * 100));
arr.push(Boolean("is true"));
arr.push(null);

console.log(arr.length);

arr.push(prompt("Enter value: "));

console.log(arr[arr.length - 1]);