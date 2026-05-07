const prompt = require("prompt-sync")();

const subtotal = Number(prompt("Enter the subtotal: "));
const rate = Number(prompt("Enter the gratuity rate as a percentage: "));

const gratuity = subtotal * (rate / 100);
const total = subtotal + gratuity;

console.log(`Gratuity: $${gratuity.toFixed(1)}`);
console.log(`Total: $${total.toFixed(1)}`);
