const person = {
  firstName: "Rohit",
  lastName: "Kumar",
  email: "rohitkumar@gmail.com",
  phone: "9823408020",
  age: 23,
};

const person2 = {
  ...person,
  age: person.age + 1,
};

console.log(person2);
