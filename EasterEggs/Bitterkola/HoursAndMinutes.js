// write a program that reads two times in HH:MM format (as seperate integers for hours and minutes) and displays the total time after adding them, handling carry-over of minutes into hours
const prompt = require("prompt-sync")();

const hour1 = Number(prompt("Enter hours for time 1: "));
const minute1 = Number(prompt("Enter minutes for time 1: "));
const hour2 = Number(prompt("Enter hours for time 2: "));
const minute2 = Number(prompt("Enter minutes for time 2: "));

let totalMinutes = minute1 + minute2;
let extraHours = Math.floor(totalMinutes / 60);
totalMinutes = totalMinutes % 60;

let totalHours = hour1 + hour2 + extraHours;

console.log(`Total time: ${totalHours}:${String(totalMinutes)}`);
