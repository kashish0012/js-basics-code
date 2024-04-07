// if

const isUserLoggedIn = true;
const temp = 41;

// if (2 == "2") {
//     console.log(executed);
// }

// if (temp === 50) {
//     console.log("Equals to 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Executed");

const score = 200;

if (score > 100) {
    const power = "fly";
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // throw error as power is not declared in the scope

// <, >, <=, >=, ==, !=, ===

const balance = 1000;

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("greater than 900");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    // console.log("Allow to Shop");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    // console.log("User logged in");
}

// *********NUllish Coalescing Operator (??): null undefined ********************

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10; 

// this operator check null/undefined value always pass not null value.

// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20; // always assign the first not null value

// console.log(val1);


// ****************** Terniary Operator (? :)******************

// condition ? true : false;
const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");