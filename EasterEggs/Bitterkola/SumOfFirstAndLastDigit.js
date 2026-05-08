// write a program that prompts the user to enter a 5-digit integer and computes the sum of the firts and the last digits

const prompt = require("prompt-sync")();
const num = Number(prompt("Enter a 5-digit integer: "));
const lastDigit = num % 10;
const firstDigit = Math.floor(num / 10000);

const sum = firstDigit + lastDigit;

// console.log(`Number: ${num}`);
// console.log(`First digit: ${firstDigit}`);
// console.log(`Last digit: ${lastDigit}`);
console.log(`Sum of first and last digit is: ${sum}`);
