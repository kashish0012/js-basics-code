class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);  //in classes super can be used instead of call
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`This course is added by ${this.username}`);
    }
}

const newUser = new Teacher("Kashish", "kash@gmail.com", "1234XXX")

const userTwo = new User("Harshit");

newUser.addCourse();
newUser.logMe();

userTwo.logMe();

console.log(newUser instanceof User);