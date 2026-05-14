const order = { id: 1, status: "pending" };

function markDelivered(orderObj) {
  orderObj.status = "delivered";
  return orderObj;
}
console.log(markDelivered(order)); 
