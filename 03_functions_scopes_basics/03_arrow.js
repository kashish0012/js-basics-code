const user = {
    username: "Kashish",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }  // this refers to the current contex
}

// user.welcomeMessage();
// user.username = "Harsh";
// user.welcomeMessage();

// console.log(this); // here this refers to node which is a empty object

// In browser the global object is window, so when we run this on the browser console, we get window object.

function tea(){
    let username = "kashish"
    // console.log(this); // shows the properties of function
    console.log(this.username); // gives undefined
}

// tea();

// const chai = function(){
//     let username = "Harshit";
//     console.log(this.username); // gives undefined
// }

const chai = () => {
    let username = "Harshit";
    console.log(this.username); // gives undefined
    console.log(this); // gives empty obect
}

// chai();

// const addtwo = (num1, num2) => {
//     return num1 + num2; // explicit return
// }

// const addtwo = (num1, num2) => num1 + num2; // Implict return

// const addtwo = (num1, num2) => (num1 + num2); // Implict return

// when we use curly braces then use return, for paranthesis no return needed.

const addtwo = (num1, num2) => ({username: "Kashish"}) // In case of returning object always use paranthesis.

// console.log(addtwo(2,8));
