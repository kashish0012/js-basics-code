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

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({usename: "kash0012", email: "kash@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "kumar0012", password: "1234"})
        } else {
            reject('ERROR; Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log('The promise is either resolved or rejected');
})

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "Java987", password: "0000"})
        } else {
            reject('ERROR; JS went wrong')
        }
    }, 1000)
});

// async await
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://randomuser.me/api/');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();

fetch('https://randomuser.me/api/').then((response) => {
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error));