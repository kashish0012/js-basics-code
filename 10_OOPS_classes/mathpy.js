const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const items = {
    name: 'Pizza cheese peproni',
    price: 699,
    isAvailable: true,

    orderItem: function(){
        console.log("Order is ready");
    }
}

console.log(Object.getOwnPropertyDescriptor(items, "name"));

Object.defineProperty(items, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(items, "name"));

for (const [key, value] of Object.entries(items)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}