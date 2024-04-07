// global scope
// var c = 300;

let a = 300;

if (true) {
    //block scope

    let a = 10; // only available for the same scope
    const b = 20; // only for the same scope
    // var c = 30; // error.... can be used outside the scope (that's why not a good practice to use var)
    // d = 40; // same as var

    // console.log("Block Scope: ", a);
}


// In browser and in code environment when we use node to run program then scope is different in both cases.

// console.log(`Global scope: ${a}`);
// console.log(b);
// console.log(c);

function one(){
    const username = "kashish";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // child function can access parent function's variables

    // console.log(website); // website variable is not declared in the scope

    two();
}

// one();

if (true) {
    const username = "kashish"
    if (username == "kashish") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // as the variable is not in scope
}

// console.log(username); // as the variable is not in scope

// +++++++++++++++++++++++ Important +++++++++++++++++++++++


addone(5); // Can run before declaration

function addone(num) {
    return num + 1;
}


addTwo(5); // can't run (throw error) a function before declaration in this case
const addTwo = function(num) {
    return num + 2;
}

