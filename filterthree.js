//.map is very useful function
 
const myNumbers = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

// const NewNums = myNums.map((num) => num + 10

// chaning method mahanje eka function nantar lagech dusre function apply karne yalach chaining ase mahantat
const newNums = myNumbers
                .map((num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num>= 40)
console.log(newNums);