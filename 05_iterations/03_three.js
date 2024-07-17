// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('FR',"France")

// console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ":-", value);
// }

const myObject = {
    "game1 ": "pubg",
    "game2": "NFA"
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

for (const key in map) {
    console.log(key);
}