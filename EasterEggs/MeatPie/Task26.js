const prompt = require("prompt-sync")();
    let firstName = String (prompt("enter your first name: "))
    let lastName = String (prompt("enter your last name: "))
    let age = Number (prompt("enter your age: "))
    
console.log("I am ",firstName , lastName + " and i am " + age +  "years old")
