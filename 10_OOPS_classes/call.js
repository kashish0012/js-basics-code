function setUserName(username){
    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    setUserName.call(this, username);
    // current execution context passed to other function
    this.email = email;
    this.password = password;
}

const user = new createUser("Kashish", "kash@google.com", "XX1230");
console.log(user);