const prompt = require("prompt-sync")();
let age = Number(prompt ("Enter your age "));

const ageChecker = (age)=>{
     if(age >0 && age < 12){
        let agegroup = "child"
        return agegroup;
     }
     else if(age >12 && age < 18){
        let agegroup = "Teeneger"
        return agegroup
     }else if (age >=18){
        let agegroup = "Adult"
        return agegroup
    }else{
        let agegroup = "Invalid"
        return agegroup
     }
     }
console.log(ageChecker(age))
