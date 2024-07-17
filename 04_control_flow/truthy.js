// const userEmail = "abhinav@ai"
const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }

// falsy values

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0",'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescint Operator (??): null undefined

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const teaprice = 100

teaprice >= 80 ? console.log("more than 80") : console.log("less than 80");