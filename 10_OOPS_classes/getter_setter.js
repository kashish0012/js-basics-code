class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password.toUpperCase()}@kash`;
    }

    set password(value){
        this._password = value;
    }
}

const kashish = new User("kash@example.com", "abcXyz123")
// console.log(kashish.password);
// console.log(kashish.email);

// properties (function) gettters and setters

function User2(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

const Harshit = new User2("kash@example.com", "abcXyz123")
// console.log(Harshit.password);
// console.log(Harshit.email);


// Object getters and setters

const User3 = {
    _email: 'harsh@kashish.com',
    _password: 'abcX123',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    },

    get password(){
        // return this._password.toUpperCase();
        return `${this._password.toUpperCase()}@kash`;
    },

    set password(value){
        this._password = value;
    }
}

const Harsh = Object.create(User3);
console.log(Harsh.email);
console.log(Harsh.password);