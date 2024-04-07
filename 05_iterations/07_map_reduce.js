// map function

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (num) => num + 10);
// map returns values 
// const newNums = myNums.map( (num) => num * 10)
//                       .map((num) => num + 1)
//                       .filter( (num) => num >= 40);

// console.log(newNums);

// ********************reduce function*******************

// reduce function has two parameters, one is the variable to store the value.
// it always return a value

const newNums = [1, 2, 3];

// const myTotal = newNums.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} and Curent value: ${currVal}`);
//     return acc + currVal;
// }, 0)

const myTotal = newNums.reduce( (acc, currVal) => {
    // console.log(`acc: ${acc} and Curent value: ${currVal}`);
    return acc + currVal;
}, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JavaScript Course",
        price: 999
    },
    {
        itemName: "Python Course",
        price: 499
    },
    {
        itemName: "Data Science Course",
        price: 1999
    },
    {
        itemName: "Mobile Dev Course",
        price: 2999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) =>{
    return acc + item.price
}, 0);

console.log(priceToPay);