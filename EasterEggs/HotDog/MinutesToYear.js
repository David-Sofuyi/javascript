const prompt = require("prompt-sync")();

const minutes = Number(prompt("Enter the number of minutes: "));


const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_YEAR = 365;

const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;
const MINUTES_PER_YEAR = MINUTES_PER_DAY * DAYS_PER_YEAR;

const years = Math.floor(minutes / MINUTES_PER_YEAR);
const remainingMinutes = minutes % MINUTES_PER_YEAR;
const days = Math.floor(remainingMinutes / MINUTES_PER_DAY);

console.log(`${minutes} minutes is approximately ${years} years and ${days} days`);
