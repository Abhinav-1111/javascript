// Primitive

// 7 types: Boolean, String, Number, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3454567568756795677456345n

// Reference (Non Primitive)

// Array, Objects, Functions

const hero = ["nagraj", "shaktiman", "Doga"]

let myObj = {
    name : "Abhinav",
    age :22
}

const myFunction = function(){
    console.log("Hi");
}




// ***********************************************************

// Stack(primitive), Heap(Non primitive)

let name = "Abhinav"
let anotherName = name
anotherName = "ritik"
console.log(name);
console.log(anotherName);

let userOne = {
    email : "abhinav.com",
    upi : "abhinav@ybl"
}

let userTwo = userOne

userTwo.email = "abhinav@yahoo.com"

console.log(userOne.email);