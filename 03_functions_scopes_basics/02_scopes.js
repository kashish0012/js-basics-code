// global scope
// var c = 300;

let a = 300;

if (true) {
    //block scope

    let a = 10; // only available for the same scope
    const b = 20; // only for the same scope
    // var c = 30; // error.... can be used outside the scope (that's why not a good practice to use var)
    // d = 40; // same as var

    console.log("Block Scope: ", a);
}


// In browser and in code environment when we use node to run program then scope is different in both cases.

console.log(`Global scope: ${a}`);
// console.log(b);
// console.log(c);