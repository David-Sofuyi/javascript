const prompt = require("prompt-sync")();
let point = Number(prompt ("Enter your point from: "))

const status1 = "Gold"
const status2 = " Silver"
if (point >= 100 ){
    console.log (status1);
}else{
    console.log (status2);
}
