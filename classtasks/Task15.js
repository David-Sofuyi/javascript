const prompt = require("prompt-sync")();
let username = prompt ("Enter your username: ")
let password = Number(prompt ("Enter your password "))

const PERMISSION = ("admin").toLowerCase().replace(" ", "")
const PASS = (1234)
if (password === 1234 && username === PERMISSION){
    console.log ("Login Success");
}
else{
    console.log ("Invalid Credentials");
}
