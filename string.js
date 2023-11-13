const name = "Yogesh";
const repoCount = 50;

// console.log(name + repoCount + " Patil"); // outdated-9syntax code writing so avoid it

console.log(`Hello My Name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('hitesh-hc');

console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    yogesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));
console.log(gameName.split());
