// for in loop

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {
    // console.log(programming[key]);    // gives array keys
}

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('FR', "France");
// map.set('IN', "India");

// // map is not iteratable through for-in loop

// for (const key in map) {
//     console.log(key);
// }