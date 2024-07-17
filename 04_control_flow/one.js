const isLoggedIn = true
const temperature = 40

// if(temperature < 50){
//     console.log("temperature is less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("Executed");

// <, >, <=, >=, == m !=, ===, !==

// const score = 200
// if(score >100){
//     const power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);

const balance = 1000
// if (balance > 100) console.log("test"), console.log("test2"); // do not use this type of code

// if (balance < 500) {
//     console.log("balance is less than 500");
// }
// else if (balance < 750) {
//     console.log("balance is less than 500");
// }
// else if (balance < 900) {
//     console.log("balance is less than 500");
// }
// else{
//     console.log("balance is less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard){
    console.log("Allowed to purchase course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}