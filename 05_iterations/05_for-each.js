// for-each loop

const coding = ['js', 'ruby', 'java', 'python', 'CPP'];

// coding.forEach( function (val) {
//     console.log(val);
// } ) // call back function is not have name

// coding.forEach((item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe); 

// always give reference for the function in for-each, if function is declared somewhere else

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// }) 

// for-each can have multiple parameters - values, index and array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "JAVA",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})