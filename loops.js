//for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element ==5){
        // console.log("5 is best number");
    }
    // console.log(element);   
}

// console.log(element); // cannot access outside of the for loop
// how to apply loop on array
 
//************************************************ */
// for(let i=  0; i <= 10; i++){
//     console.log(`Outer Loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(`Inner Loop value ${j} and inner loop ${i}`);
//     }
// }

//************************************************ */
[]
for(let i=  1; i <= 10; i++){
    // console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner Loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["flash", "batman", "Superman"]
    // console.log(myArray.length);
for (let index = 0; index <myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index ==5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of Index is ${index}`);
    
// }


//*************Continue */
for (let index = 1; index <= 20; index++) {
    if(index ==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of Index is ${index}`);
    
}