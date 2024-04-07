// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArr = ["flash", "batman", "superman"];
// console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break; // break the loop at the moment
//     }
//     console.log(`Value is index is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue; // condition skip one time
    }
    console.log(`Value is index is ${index}`);
}