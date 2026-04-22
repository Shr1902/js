const accountId = 15566
let accountEmail = "shr@google.com"
var accountPassword = "12345"
accountCity = "akola"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"

accountPassword = "huh333"

accountCity = "nanded"

let accountState;

console.log(accountId);

/*
Prefer not to use  var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
