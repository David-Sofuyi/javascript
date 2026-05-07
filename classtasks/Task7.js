const account = {
    balance: 500,
    isBlocked: false
}

const prompt = require("prompt-sync")();
let account_balance = Number(prompt ("Enter your Account Balance: "))
let account_status = prompt ("Enter your Account Status: ").toLowerCase.replaceAll(" ", "")

account.balance = account_balance
account.status =  account_status
const {balance, isBlocked} = account

if (account_status == "Blocked"){
    isBlocked == true
    console.log("Account Blocked")
}
if (account_balance < 100){
    console.log("Low Balance!!!")
} else{
    console.log("OK")
}

