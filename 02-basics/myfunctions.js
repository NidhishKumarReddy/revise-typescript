"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello";
}
function getUpper(val) {
    return val.toUpperCase;
}
function signUpUser(name, email, password) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("nidhish");
signUpUser("nidhish", "nidhishkumarreddy@gmail.com", "pass123@");
loginUser("nidhish", "nidhishkumarreddy@gmail.com");
// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
