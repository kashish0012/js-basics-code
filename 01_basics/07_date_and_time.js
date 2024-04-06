// Dates

let myDate = new Date();

// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// let myCreateDate = new Date(2024, 0, 28);
// let CreateDate = new Date(2024, 0, 14, 22, 56);
// console.log(myCreateDate.toDateString());

let CreateDate = new Date("01-24-24");
// console.log(CreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(CreateDate.getTime());
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // count starts from 0
// console.log(newDate.getDay() + 1);
// console.log(newDate.getFullYear());
// console.log(`${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);

console.log(newDate.toLocaleString('default',{
    dateStyle: "long"
}));