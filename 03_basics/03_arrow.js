const user = {
    username : "Abhinav",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     const user = "Abhinav"
//     console.log(this.user);
// }

// chai()

// const chai = function(){
//     const user = "Abhinav"
//     console.log(this.user);
// }

// chai()

// const chai = () =>{
//     const user = "Abhinav"
//     console.log(this.user);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "abhinav"})

console.log(addTwo(3,4));

const myArray = [2,5,3,6,7]
