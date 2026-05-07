const prompt = require("prompt-sync")();
let name = prompt ("Enter your name: ")
let age = prompt ("How old are you? ")
let country = prompt ("Enter your your country? ")
const PERMISSION = ("Nigeria").toLowerCase().replace(" ", "")
if (age >= 18 && country === PERMISSION){
    console.log ("Access Granted");
}
else{
    console.log ("Access Denied");
}
