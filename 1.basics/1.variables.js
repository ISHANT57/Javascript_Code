const accountId = 14455;
let accountEmail = "ishantbhoyar59@gmail.com";
var accountPassword = "12345";
accountCity = "Gondia";
let accountState;

// accountId=2
accountEmail = "ishantbhoyar859@gmail.com";
accountPassword = "1212";
accountCity = "Nagpur";

/*  prefer not to use var bcz issue in block scope and functional scope value change hone ki */

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
console.log(accountId);
