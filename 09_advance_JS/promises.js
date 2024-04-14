const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    })
});

promiseOne.then(function(){
    console.log("Promise consumed");
})