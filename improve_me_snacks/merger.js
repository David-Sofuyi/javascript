const personal = { name: 'David', age: 27 };
const career = { role: 'Designer', company: 'ChapelHillDenham' };

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const person = mergeObjects(personal, career);
console.log(person);

