const name = "kashish";
const repCount = 10;

// console.log(name + repCount + " Value"); // old method not using currently

// console.log(`Hello my name is ${name} and my repo count is ${repCount}`);

const gameName = new String('Kashish-Kumar-Singh');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('A'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-15, 4);
console.log(anotherString);

const newStringOne = "     Kashish    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kashish.com/kashish%10kumar"
console.log(url.replace('%10', '-'));

console.log(url.includes('kashish'));
console.log(url.includes('Harshit'));

console.log(gameName.split('-'));