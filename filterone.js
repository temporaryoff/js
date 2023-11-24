const myNums = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

//filter function takes function inside it so it is also a callback function
// const newNums = myNums.filter( (num) => num > 4)  // wothod using return key because code in single line
//OR
const newNums = myNums.filter( (num) =>  {
    return num > 4  // using return key because of use {} scope 
})

console.log(newNums);