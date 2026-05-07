const personal = {
    name: "Ngozi",
    age: 25
}
const professional = {
    role: "Developer,",
    company: "Semicolon"
    }
const user ={
    ...personal , ...professional
}
console.log(user)    
