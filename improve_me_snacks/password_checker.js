function validateLogin(username, password) {
  const correctUser = "admin";
  const correctPass = "1234";
  
  if (username === correctUser && password === correctPass) {
    return "Login successful";
  }
  return "Invalid username or password";
}

console.log(validateLogin("admin", "1234"));
console.log(validateLogin("user", "wrong"));
