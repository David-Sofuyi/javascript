const prompt = require("prompt-sync")();

const num = Number(prompt("Enter an integer between 0 and 1000: "));

   let minutes = num;
   let sum = 0;

    while (minutes > 0) {
        sum += minutes % 10;
        minutes = Math.floor(minutes / 10);
    }

    console.log(`The sum of digits in ${num} is: ${sum}`);
