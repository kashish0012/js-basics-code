const user = {
    username : "kashish",
    loginCount : 8,
    singnedIn : true,

    getUserDetails: function(){
        // console.log("Got user details");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// const promise = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this; //this is implicitly defined
}
const userOne = new User("kashish", 12, true);
const userTwo = new User("Harsh", 23, false);
console.log(userOne.constructor);
// console.log(userTwo);

// instanceOf 