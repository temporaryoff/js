// There are two types of memory in javascript
    // a) Stact memory => jay thikani apan Primitive data type vaparto tya thhikani Statck memory use keli jate.
            // jya veli stack Stack memory use keli jate teva tya memory madhun tya value chi ek copy milte.

    // b) Heap momory => jya thikani Non-Primitive datatype use kela jato tya thikani Heap Memory use Keli jate.
        // jya veli Heap memory cha use hoto tya veli Heap value madhun tya value cha refrence milto jar apn to cange kela tar to change hoto.

let myYoutubeChannel = "yogeshpativideo"

let anothername = myYoutubeChannel
anothername = "Chai aur code"
console.log(anothername);
console.log(myYoutubeChannel);

let userOne = {
    email: "userone@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);