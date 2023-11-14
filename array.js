// const myArr = [0, 1, 2, 3, 4, 5, true, "yogesh"];// it is also a simple and correct array
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "doga", "Nagraj"];
const myArrayTow = new Array(1,2,3,4) // it autometically add [ ] brackets begind the scence
// console.log(myArr[0]);

//* ****************** ARRAY METHODS ***************************

myArr.push(6);
myArr.push(9);
myArr.pop(); //pop removes the last value of array

myArr.unshift("Alpha"); // 
console.log(myArr);

console.log(myArr.includes(4));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));


//************** VERY IMPORTANT TO LEARN */

const newArray = myArr.join();

console.log(myArr);
console.log(newArray);
console.log(typeof newArray);

//*************** 2ND VERY IMPORTANT POINT TO LEARN IN JS A) SLICE   B) SPLICE */ FOR INTERVIEW PURPOSE IMP

console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);



