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

console.log(loginUserMessage("Kashish"));
console.log(loginUserMessage());