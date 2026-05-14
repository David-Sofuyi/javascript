 const employee = {
    Name: "David",
    Role: "Engineer",
    Salary: 50000,
    Department: "Tech",
    };

function getNameAndSalary2({ name, salary }) {
  return `${name} earns ${salary}`;
}
console.log(getNameAndSalary2(employee));
