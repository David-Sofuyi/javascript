const prompt = require("prompt-sync")();
let score = prompt ("What is your score? ")

if (score >= 90){
    console.log ("Grade A");
}
else if (score == 80 && score < 90){
    console.log ("Grade B");
}
else if (score == 70 && score < 80){
    console.log ("Grade c");
}
else if (score < 70){
    console.log ("Grade F");
}
   
