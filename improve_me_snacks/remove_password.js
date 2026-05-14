Remove password property from user object
const user = { username: "admin", password: "12345" };

function removePassword(userObj) {
  const { password, ...rest } = userObj; 
  return rest;
}
console.log(removePassword(user));

