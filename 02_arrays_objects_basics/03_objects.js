// singleton - only when declare from constructors
// Object.create

// Object literals

const mySym = Symbol();

const JsUser = {
    name: "Kashish",
    "full name": "Kashish Kumar Singh",
    [mySym]: "mySymKey1",
    age: 18,
    location: "Bijnor",
    email: "kashish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); 

// sometimes we access the object values from dot(.) or [""] or just [] depends on the situations or data types

JsUser.email = "kashish@microsoft.com";
// Object.freeze(JsUser);
JsUser.email = "kashish@chatgpt.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());