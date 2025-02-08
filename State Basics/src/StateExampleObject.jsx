import { useState } from "react";
function StateExampleObject() {
  const [person, setPerson] = useState({
    firstName: "Rohit",
    lastName: "Kumar",
    email: "rohitkumar@gmail.com",
    phone: "9823408020",
    age: 23,
  });

  const IncreaseAge = () => {
    // setPerson({
    //   ...person,
    //   age: person.age + 1,
    // });
    setPerson((previousState) => {
      return {
        ...previousState,
        age: person.age + 1,
        phone: "8220069882",
      };
    });
    // setPerson((perviousState) => ({ ...perviousState, age: person.age + 1 }));
  };
  return (
    <>
      <div>
        <p>firstName: {person.firstName}</p>
        <p>lastName: {person.lastName}</p>
        <p>email: {person.email}</p>
        <p>phone: {person.phone}</p>
        <p>age: {person.age}</p>
        <button onClick={IncreaseAge}>Increase Age</button>
      </div>
    </>
  );
}

export default StateExampleObject;
