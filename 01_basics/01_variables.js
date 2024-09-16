const accountId= 122425
let accountEmail = "shiv123@google.com"
let accountPassword = "12345"
accountCity = "jaipur"
let accountState;


// accountId = 2 not allowed
accountEmail = "abc45@hc.com"
accountPassword = "56789"
accountCity = "indore"

/*
prefer not to use var
bcoz of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])
//console.log(accountId);
