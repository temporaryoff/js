function sayMyName(){
    console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");
}

sayMyName; // this is refrence of function because there is not () => useful in react
sayMyName(); // this is execution of function becuae there is () => useful in react

// function addTwoNumbers(number1, number2){
//         console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    console.log("Alpha");
    return result;
    console.log("Beta");
}
//IMP NOTES => RETRUN NANTAR FUNCTION EXECUTION KARAT NAHI
const result = addTwoNumbers(3, 4);
// console.log(result);

function loginUserMessage(usrname){
    return `${usrname} just logged in`
}

// console.log(loginUserMessage("yogesh"));
console.log(loginUserMessage());  // jevha argument pass karat nahit teva undefined yete IMP for interview questiion

// cart madhe kiti item add honar aahet te mahit nahi. mahanun te parameter madhun kase pass karave ya sathi rest operator use karava=> most commonly use in industary

function calculateCartPrice(...num1){  // ... spread operator is also called as rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

function calculateCartPriceTwo(val1, val2, ...num1){  // 235 and 652 goes into val1 and val3 and remaining 7954 and 66546 into num1
    return num1
}

console.log(calculateCartPriceTwo(235, 652, 7954, 66546));

// Here is the example how pass object into function
const user ={
    username : "yogesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username : "Sam",
    price: 888
})

// now we are passing array into function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([478, 957, 654, 6475]));
