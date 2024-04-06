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

console.log(typeof anotherId);
console.log(typeof scoreValue);
console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);