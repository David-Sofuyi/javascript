// write a program that takes a person's weight in kg and height in meters, computes BMI and classifies as : underweight(<18.5), Normal(18.5-24.9), overweight(25-29.9), obese (30+)
const prompt = require("prompt-sync")();
const weight = Number(prompt("Enter weight in kg: "));
const height = Number(prompt("Enter height in meters: "));

const bmi = weight / (height * height);
const bmiRounded = bmi.toFixed(1);

let status;
if (bmi < 18.5) {
    status = "Underweight";
} else if (bmi < 25) {
    status = "Normal";
} else if (bmi < 30) {
    status = "Overweight";
} else {
    status = "Obese";
}

// console.log(`Wei                                                 ght: ${weight} kg`);
// console.log(`Height: ${height} m`);
// console.log(`BMI: ${bmiRounded}`);
console.log(`status: ${status}`);
