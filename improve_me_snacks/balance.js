const account = { accountName: "David", balance: 500 };

function checkBalance(acc) {
  return acc.balance < 1000 ? "Low Balance" : "Sufficient Balance";
}
console.log(checkBalance(account));
