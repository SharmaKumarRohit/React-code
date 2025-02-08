// function App() {
//   let firstName = "Rohit";
//   function changeName() {
//     firstName = "Abhay";
//     console.log(firstName);
//   }
//   return (
//     <>
//       <div className="App">
//         <h1>{firstName}</h1>
//         <button onClick={changeName}>Change Name</button>
//       </div>
//     </>
//   );
// }

// import { useState } from "react";
// function App() {
//   const returnedValue = useState("Rohit");
//   const firstName = returnedValue[0];
//   const functionToUpdateFirstName = returnedValue[1];
//   function changeName() {
//     functionToUpdateFirstName("Abhay");
//   }
//   return (
//     <>
//       <div className="App">
//         <h1>{firstName}</h1>
//         <button onClick={changeName}>Change Name</button>
//       </div>
//     </>
//   );
// }

import { useState } from "react";

function SimpleStateExample() {
  console.log("component rerendered");
  const [firstName, setFirstName] = useState("Rohit");
  function changeName() {
    if (firstName === "Rohit") {
      setFirstName("Abhay");
    } else {
      setFirstName("Rohit");
    }
  }
  return (
    <>
      <div className="App">
        <h1>{firstName}</h1>
        <button onClick={changeName}>Change Name</button>
      </div>
    </>
  );
}

export default SimpleStateExample;
