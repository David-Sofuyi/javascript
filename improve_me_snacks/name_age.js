const user = { name: "Amaka", age: 25, country: "Nigeria" };

function getNameAndAge(userObj) {
  const { name, age } = userObj;
  return { name, age };
}
console.log(getNameAndAge(user)); 
