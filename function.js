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