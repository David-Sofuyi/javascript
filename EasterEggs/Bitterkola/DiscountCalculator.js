// write a program that reads a price and a discount percentage, calculates the discount amount, and displays the final price
const prompt = require("prompt-sync")();
const price = Number(prompt("Enter the price: "));
const discountPercent = Number(prompt("Enter the discount percentage: "));

const discountAmount = price * (discountPercent / 100);
const finalPrice = price - discountAmount;

// console.log(`Original price: $${price.toFixed(2)}`);
// console.log(`Discount: ${discountPercent}% ($${discountAmount.toFixed(2)})`);
console.log(`Final price: $${finalPrice.toFixed(2)}`);
