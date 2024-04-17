class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){
        return console.log(`123`);
    }
}

const kash = new User("Kashish");
// kash.createID();

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const mobile = new Teacher("iphone", "iphone@apple.com");
mobile.createID();