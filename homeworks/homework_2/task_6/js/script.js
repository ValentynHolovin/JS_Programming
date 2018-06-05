let x = 1;
let y = 2;
let res1 = "" + x + y;
console.log(res1);    // &quot;12&quot;
console.log(typeof res1); // &quot;string&quot;
let res2 = Boolean(x).toString() + y;
console.log(res2); // &quot;true2&quot;
console.log(typeof res2); // &quot;string&quot;
let res3 = Boolean(x + y);
console.log(res3); // true
console.log(typeof res3); // &quot;boolean&quot;
let res4 = ("err" + x) * y;
console.log(res4); // NaN
console.log(typeof res4); // &quot;number&quot;