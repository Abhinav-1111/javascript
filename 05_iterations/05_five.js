const myArray = ["java", "js", "ruby", "cpp"]

// myArray.forEach(function(language) {
//     console.log(language);
// });

// myArray.forEach((language) =>{
//     console.log(language);
// });

// function printMe(item){
//     console.log(item);
// }

// myArray.forEach(printMe)

// myArray.forEach((item, i, myArray) => {
//     console.log(item, i, myArray);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "python"
    }
]

myCoding.forEach((item) =>{
    console.log(item.languageFileName);
})