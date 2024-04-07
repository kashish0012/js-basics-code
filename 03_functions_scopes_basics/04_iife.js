// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);  // named IIFE
})(); 

// when we use two IIFE functions simultaneously then use semicolon to break first function otherwise throw error, as compiler doesn't know where to stop after first IIFE function.

// IIFE - the function which executed immeditely
// we have pollution from global scope declarations, to remove that we use IIFE.

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);  // Simple IIFE
})("Kashish");