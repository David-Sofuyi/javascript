const prompt = require("prompt-sync")();
let status = prompt ("Enter your status: ").toLowerCase.replaceAll(" ", "")

const order = {
    status: "pending"
}
order.status = status

if (status == "pending"){
    console.log("order processing")
}else if (status  == "shipped"){
    console.log("Shipped")
} else if (status == "delivered"){
    console.log("Delivered")
}

