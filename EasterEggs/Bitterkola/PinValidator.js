// write a program that reads a 4-digit pin entered by the user and validates it: the pin must be exactly 4 digits (between 1000 and 9999). display: valid pin or invalid pin

const prompt = require("prompt-sync")();

const pin = Number(prompt("Enter a 4-digit PIN: "));


if (Number.isInteger(pin) && pin >= 1000 && pin <= 9999) {
    console.log("Valid PIN");
} else {
    console.log("Invalid PIN");
}
