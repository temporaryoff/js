let score = "33abc";

console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

let isLoogedIn = 1;
let booleanIsLoogedIn = Boolean(isLoogedIn);
console.log(booleanIsLoogedIn);

// that means 1 is actually convert as boolean value and 1 is as true value in output
// and 0 coverts into false
//"" => false
//"yogesh"=> true

let number = 44;
let numberToString = String(number);
console.log(numberToString);
console.log(typeof numberToString);