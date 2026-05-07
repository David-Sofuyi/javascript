const prompt = require("prompt-sync")();

const side = Number(prompt("Enter the length of a side: "));
const area = (Math.sqrt(3) / 4) * side * side;
const volume = area * side


console.log(`Side length: ${side}`);
console.log(`volume: ${volume.toFixed(2)}`);
