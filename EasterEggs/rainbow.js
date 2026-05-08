// let rainbow = 1;
// while (rainbow <=7){
// console.log(rainbow);
// count++;
// }
const colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

const randomNum = Math.floor(Math.random() * 7) +1;

console.log(`Random number: ${randomNum}`);
console.log(`Color: ${colors[randomNum - 1]}`);

