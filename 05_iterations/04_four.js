const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const myArray = ["java", "js", "ruby", "cpp"]
for (const key in myArray) {
    console.log(myArray[key]);
}