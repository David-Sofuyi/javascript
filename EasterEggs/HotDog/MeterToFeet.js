const prompt = require("prompt-sync")();

const meter = Number(prompt("Enter height in meter: "));
const feet = meter * 3.2786;

console.log(`${meter} meter = ${feet} feets`);
