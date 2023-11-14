const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);[]
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 75]]];
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Yogesh")); // checking there is array or not
console.log(Array.from("Yogesh")); // converts this inot array format
console.log(Array.from({name: "Mitesh"})); // we have to say him that arry is key based or value based in return format

let score1 = 100;
let score2 = 200;
let scroe3 = 300; // we can convert variables into array

console.log(Array.of(score1, score2, scroe3));


