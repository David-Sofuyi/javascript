const prompt = require("prompt-sync")();

const firstNumber = Number(prompt("Enter your first number: "));
const secondNumber = Number(prompt("Enter your second number: "));

const addition = firstNumber + secondNumber;
const product = firstNumber * secondNumber;

console.log(`The sum of both numbers is: ${addition}`);
console.log(`The product of both numbers is: ${product}`);
