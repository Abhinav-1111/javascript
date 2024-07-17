const accountId = 123445
let accountEmail = "jamessbond@44gmail.com"
var accountPassword = "jamess"
accountCity = "jaipur"
let accountState;

// accountId = 234543 // const variable cannot be changed

accountEmail = "advefsdf@gmail.com"
accountPassword = "2423445"
accountCity = "pune"

console.log(accountId)
/*
preferred not to use var keyword
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])