const marvel_heros = ["IronMan", "CaptainAmerica", "Spiderman", "Thor"];
const dc_heros = ["Superman", "Batman", "WonderWomen", "Flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heroes = [...marvel_heros, ...dc_heros];
// console.log(all_new_heroes);

const array2 = [0, 1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

const real_array2 = array2.flat(Infinity);
// console.log(real_array2);

// console.log(Array.isArray("Kashish"));
// console.log(Array.from("Kashish"));
// console.log(Array.from({name: "Kashish"})); // return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

