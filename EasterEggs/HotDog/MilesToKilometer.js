const prompt = require("prompt-sync")();

const miles = Number(prompt("Enter distance in miles: "));
const kilometers = miles * 1.6;

console.log(`${miles} miles = ${kilometers} kilometers`);
