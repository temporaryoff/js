const userEmail = []

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user email");
}

// varil example madhe value truthy kiwa falsy aahe he assume kele jate, blank array la pan true ani blank string la false manle jate ya sathi ek niyam aahe

// falsy values 
    // false , 0 , -0, Bigint 0n, "" , null, undefined, NaN

// truthy values
    //"0", 'false', " ", [], {}, function(){}, 


    //******************************************* */

// if (userEmail.length === 0){
//     console.log("Array is Empty");
// } 

// const emptyObj = {}

// if(Object.keys().length === 0){
//     console.log("Object is Empty");
// 8 }

//*********************************************** */
// Nullish Coalescing Operator (??) null undefined

let val1;
// val1 = 5 ?? 10       // result is 5
// val1 = null ?? 10        // result is 10
// val1 = undefined ?? 15      // answer is 15
val1 = null ?? 10 ?? 20         // answe is 10 taking first optional value so compilor ake 10

// console.log(val1);

//******************************************* */

//TIP: TERNARY OPERATOR AND NULLISH COALESCING OPERATOR ARE DIFFERENT THINGS-

const inceTeaPrice = 79
inceTeaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80");


