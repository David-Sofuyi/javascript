// write a program that reads two integers and prints the sum if both are positive, the product if both are negative and the difference (larger minus smaller if they have opposite signs)

const prompt = require("prompt-sync")();
const firstnumber = Number(prompt("Enter first integer: "));
const secondnumber = Number(prompt("Enter second integer: "));

let result;

if (firstnumber > 0 && secondnumber > 0) {
    result = firstnumber + secondnumber;
    console.log(`${firstnumber} + ${secondnumber} = ${result}`);
} else if (firstnumber < 0 && secondnumber < 0) {
    result = firstnumber * secondnumber;
    console.log(`${firstnumber} * ${secondnumber} = ${result}`);
} else if ((firstnumber > 0 && b < 0) || (firstnumber < 0 && secondnumber > 0)) {
    result = Math.abs(firstnumber - secondnumber);
    console.log(`|${firstnumber} - ${secondnumber}| = ${result}`);
} else {
    console.log("One or both numbers are zero. No operation performed.");
}


