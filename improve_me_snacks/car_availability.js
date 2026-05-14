const car = { brand: "Toyota", model: "Camry", available: true };

function checkCarAvailability(carObj) {
  return carObj.available ? "This car is available" : "This car is not available";
}
console.log(checkCarAvailability(car)); 
