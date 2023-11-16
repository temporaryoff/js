// object lihinyache don prakar aahet a) literal paddath   b) constructor paddath c) there is a may a third type which is singleton => singleton mahanje jevan construnctor madhun ek object tayar  hoto teva tyala singleton ase mahantat.
// in this file we are going to learn object literal and all below examples is of literal example
// const Jsuser = {}  // curly braces are shows this is oobject. thats simple
const mySym = Symbol("key1") // ask for interview question Most IMP
const Jsuser = {
    name : "Yogesh",  // object madhe values ya nehami key ani value pair madhe astat
    age : 18,
    [mySym]: "mySymKey",
    location: "Sangli",
    email: "yogeshpatil@gmal.com",
    isLoogedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email); // this is very normal method to call object value
console.log(Jsuser["email"]); // this is also second method to call object value but here do not put dot and the key works ans string behind the scene so in [] we call key as a string
console.log(Jsuser[mySym]);  // ask for interview question Most IMP use [] to show symbol and this is correct syntax

Jsuser.location = "Pune";  // this is the way to change the value of object
Jsuser.email = "yogeshmicrosoft@gmail.com"
// Object.freeze(Jsuser);  // this freeze the whole object and that why no one can change it's value again error will not show in this case

//we can treat function as like variables
Jsuser.greeting = function(){
    console.log("Hello Js user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS USER ${this.name}`); // jya veli same object madhun aatil key la access kartana this keyword cha use kela jato.
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


