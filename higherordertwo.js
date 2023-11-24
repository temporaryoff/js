//apply loop on object
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}

// forin loop in useful in objects
for (const key in myObject) {
    console.log(key); // here only shows the kay
    console.log(myObject[key]);  // ya code ne key ani value pan milel
    console.log(`${key} shortcut is for ${myObject[key]}`); //show object key with value
}