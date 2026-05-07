const prompt = require("prompt-sync")();

const v = Number(prompt("Enter the airplane speed: "));
const a= Number(prompt("Enter the airplane acceleration; "));

const length = v ** 2 / (2 * a)

console.log(`the minimum run way lenght needed is ${length} `);
