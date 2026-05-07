const prompt = require("prompt-sync")();
const number = Number(prompt("Enter a number? "))

number < 0 ? console.log(`negative: ${number}`)
  : number == 0 ? console.log(`zero: ${number}`)
  : console.log(`positive: ${number}`)
