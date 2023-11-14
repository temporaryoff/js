let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.getSeconds());
console.log(myDate.getUTCDate());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,14);
console.log(myCreatedDate.toDateString());

let myCreatedDateTwo = new Date("01-14-2023");
console.log(myCreatedDateTwo.toDateString());
console.log(myCreatedDateTwo.toLocaleString());

//***************************** TIME STAMP IN JAVASCRIPT */
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  // converting into miliseconds to second so divide it by 1000

// ************************************** NEW METHODS OF DATE IN JAVASCRIPT  *********************

let newDateabc = new Date();
console.log(newDateabc);;
console.log(newDateabc.getMonth() +1);
console.log(newDateabc.getDay() + 1);

// `This is ${ewDateabc = new Date()} today time`

// THIS IS VERY USEFUL LAND METHOD OF DATE IN JAVASCRIPT
newDateabc.toLocaleString('default', {
    weekday:"long",
});