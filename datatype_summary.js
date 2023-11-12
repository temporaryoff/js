// *** if you want to become a master of javascript then study the object and browser javascript event then you can easily become of javascript master

// Primitive => all primitive datatypes are call by value that means they use other place as copy of that value not a by address
// 7 type : String, Number, boolean, null, undefined, symbol, Bigint, 


// Refrence Type or Non-Primitive
// Array, Object , Functions


const score = 100;
const scoreValue = 100.3;

const isLoogedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 65469845313657656565n;

const heros = ["Shaktiman", "naagraj", "doga"];  // this is array
let myObje = {  // this is object 
    name :"Yogesh",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
}
