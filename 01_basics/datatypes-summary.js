// Primitive Data types

//call by values
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; //datatype object

let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 2345234624562652562n; // datatype bigint

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "kashish",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}  // datatype - function Object

// console.log(typeof anotherId);
// console.log(typeof scoreValue);
// console.log(typeof outsideTemp);
// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);


//******************Memory********************** */

// Stack (Primitive), Heap (Non-Primitive)

let myName = "kashishkumarsingh"

let anotherName = myName;
anotherName = "HarshitKumarSingh"

console.log(myName);
console.log(anotherName);

// In sack memory, if we change the value of any variable then the change is done in the copy of that value.

let userOne = {
    email: "user@gmail.com",
    upi: "user@axl"
}

let userTwo = userOne;

userTwo.email = "kashish@google.com";

console.log(userOne.email);
console.log(userTwo.email);

// In Heap memory, we get reference of any scoreValue, means if we're changing the value then original value gets changed.