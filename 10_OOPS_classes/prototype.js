// let myName = "kashish          ";
// let myCompany = "Nrityashala       ";

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kashish = function(){
    console.log(`Kashish is present in all objects`);
}

Array.prototype.heyKashish = function(){
    console.log(`Kashish says hello`);
}

// heroPower.kashish();
// myHeroes.kashish();

// myHeroes.heyKashish();
// heroPower.heyKashish();


// Inheritance


const user = {
    name: "Kashish",
    email: "Kashish@example.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "kashih0012         ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();