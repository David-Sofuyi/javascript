// write a program that reads an integer and displays: Buzz if divisible by 5, Fizz if divisible by 3, FizzBuzz if divisible by both, or the number itself if divisible by neither.
const prompt = require("prompt-sync")();

const num = Number(prompt("Enter an integer: "));

if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
} else if (num % 3 === 0) {
    console.log("Fizz");
} else if (num % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(num);
}
