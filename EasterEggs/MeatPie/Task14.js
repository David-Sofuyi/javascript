const prompt = require("prompt-sync")();
    let firstNumber = Number(prompt("enter your first number "))
    let secondNumber = Number(prompt("enter your second number "))
    let thirdNumber = Number(prompt("enter your third number "))
    average = firstNumber + secondNumber + thirdNumber 
console.log("The average of your numbers is" ,average / 3)
