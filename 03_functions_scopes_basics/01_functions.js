function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1+num2;
    // return result;

    return num1 + num2;
}

// addTwoNumbers(3, 4);
// addTwoNumbers(3, "4");

const result = addTwoNumbers(3,5);
// console.log("Result:", result);

function loginUserMessage(username = "User"){
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kashish"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 700, 100));

const user = {
    username: "kashish",
    price: 199
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObject(user);

// handleObject({
//     username: "Harsh",
//     price: 1999
// });

const myArr = [200, 400, 100, 600];

function returnSecondVal(getArr){
    return getArr[1];
}

// console.log(returnSecondVal(myArr));
console.log(returnSecondVal([100, 200, 300, 400]));