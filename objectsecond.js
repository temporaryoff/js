//here in this second file of object we are going to learn how to done it by singleton or construtor
// const tinderUser = new Object();  // this is a example of object because this is a type of singleton object
const tinderUser2 = {}; // this is second a example of object
console.log(tinderUser2);

tinderUser2.id = "123abc"
tinderUser2.name = "Samy"
tinderUser2.isLoggedIn = false

//console.log(tinderUser2);  // we can declare object key value outside the object like this and this yogesh opinion

const regularUser = {
    email: "some@gamil.com",
    fullname : {
        useerFullname:{
            firstname: "yogesh",
            lastname: "patil"
        }
    }
}

// console.log(regularUser.fullname.useerFullname.lastname);

 //COMBINE TWO OBJECTS
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};
 
//  const obj3 = { obj1, obj2 }; // this will return object inside object in answer
// const obj3 = Object.assign({}, obj1, obj2, obj4); // lest use 
const obj3 = {...obj1, ...obj2, ...obj4}
//  console.log(obj3);

// down example madhe db kadun data yet astana array of object yet asto. teva apan map kiwa dot cha use karun value access karat asto.
const users =[
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "m@gmail.com"
    },
]
 
users[1].email // first value aahe mahanun [1] dila ani email la call kela
console.log(tinderUser2);

console.log(Object.keys(tinderUser2)); // tinderUser2 ya object chaya all keys ek array madhe return hotat ani tya alelya key's chaya array la apn loop use karun vapru shakto.
console.log(Object.values(tinderUser2)); // apn value suddhe varil pramane baher kadu shakto. 
console.log(Object.entries(tinderUser2)); // key ani value la array madhe tayar karun deto.

console.log(tinderUser2.hasOwnProperty('isLoggedIn'));  // object la isLoggedIn hee property ahe ka nahi te vicharane

//***************** NEXT VIDEO IS CONTNUE FROM VIDEO NO 17 */
//******************** THIS IS START OF VIDEO NO. 18 */
// de-structring he array chi ani object chi pan aste he api la jast useful aahe.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


course.courseInstructor // this is commonly used method to call object elements
const {courseInstructor} = course // course object madhun de-structor karun courseInstructor baher kadun variable madhe store kele
console.log(courseInstructor);

const {courseInstructor : instructor} = course // de-structor the object and change it variable name
console.log(instructor);

// ARRAY LA RARLY DE-STRUCTRING KELE JATE
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
