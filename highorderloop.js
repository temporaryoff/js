// for of => this is higher order function
// ["", "", ""]
// [{}, {}, {}]


// object la ittrate mahanje print karnyasathi use kela jato. see and understant
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

// we can appy forof loop on string also.
const greentings = "Hello World"
for (const gret of greentings) {
    if(gret == " ")
    continue;
    // console.log(`Each char is ${gret}`);
}


//MAP IN JAVASCRIPT only basics

const map = new Map()
map.set('IN', 'Inida')
map.set('USA', 'United States Of America')
map.set('Fr', 'France')
map.set('IN', 'Inida') // same key and value asel tar map parat repeat karat nahi te fakt unique ghete.

// console.log(map);

// var example var loop lavala aahe
for (const [key, value] of map) {
    // console.log(key, ':-' , value);
}

//VARIL PRAMANE JAR OBJECT 
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) { // object var asha paddatine ittrate hot nahi
    console.log(key, ':-' , value);
}
