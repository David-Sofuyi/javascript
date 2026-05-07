const prompt = require("prompt-sync")();
    let firstNumber = Number (prompt("enter your first number:  "))
    let secondNumber = Number (prompt("enter your second number:  "))
    let thirdNumber = firstNumber
    firstNumber = secondNumber
    secondNumber = thirdNumber
console.log("First Number = ",firstNumber)
console.log("Second Number = " , secondNumber)
