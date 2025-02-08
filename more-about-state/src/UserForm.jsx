import { useState } from "react";
import DisplayFullName from "./DisplayFullName";
// import TestComponent from "./TestComponent";

// function UserForm() {
//   console.log("UserForm component re-rendered");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");
//   return (
//     <>
//       <form>
//         <h1>Form</h1>
//         <div>
//           <label htmlFor="firstName">FirstName </label>
//           <input
//             type="text"
//             id="firstName"
//             value={firstName}
//             onChange={(e) => {
//               setFirstName(e.target.value);
//               setFullName(e.target.value + " " + lastName);
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="lastName">LastName </label>
//           <input
//             type="text"
//             id="lastName"
//             value={lastName}
//             onChange={(e) => {
//               setLastName(e.target.value);
//               setFullName(firstName + " " + e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <h2>user detail</h2>
//           <p>firstName: {firstName}</p>
//           <p>lastName: {lastName}</p>
//           <p>fullName: {fullName}</p>
//         </div>
//       </form>
//     </>
//   );
// }

// function UserForm() {
//   console.log("UserForm component re-rendered");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const fullName = firstName + " " + lastName;
//   console.log(fullName);
//   return (
//     <>
//       <form>
//         <h1>Form</h1>
//         <div>
//           <label htmlFor="firstName">FirstName</label>
//           <input
//             type="text"
//             id="firstName"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="lastName">LastName</label>
//           <input
//             type="text"
//             id="lastName"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <h2>user detail</h2>
//         <p>firstName: {firstName}</p>
//         <p>lastName: {lastName}</p>
//         <p>fullName: {fullName}</p>
//       </form>
//     </>
//   );
// }

// function UserForm() {
//   console.log("UserForm component re-rendered");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const fullName = firstName + " " + lastName;
//   return (
//     <>
//       <form>
//         <h1>Form</h1>
//         <div>
//           <label htmlFor="firstName">FirstName </label>
//           <input
//             type="text"
//             name="firstName"
//             id="firstName"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="lastName">LastName </label>
//           <input
//             type="text"
//             name="lastName"
//             id="lastName"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <div>
//           <h2>user detail</h2>
//           <p>firstName: {firstName}</p>
//           <p>lastName: {lastName}</p>
//           <p>
//             fullName: <DisplayFullName fullName={fullName} />
//           </p>
//         </div>
//         <TestComponent />
//       </form>
//     </>
//   );
// }

// function UserForm() {
//   // const [firstName, setFirstName] = useState(); // value is undefined or component is uncontrolled
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const fullName = firstName + " " + lastName;
//   return (
//     <>
//       <form>
//         <div>
//           <label htmlFor="firstName">FirstName </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="lastName">LastName </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <div>
//           <h2>user detail</h2>
//           <p>firstName: {firstName}</p>
//           <p>lastName: {lastName}</p>
//           <p>
//             fullName: <DisplayFullName fullName={fullName} />
//           </p>
//         </div>
//       </form>
//     </>
//   );
// }

function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;
  return (
    <>
      <form>
        <div>
          <label htmlFor="firstName">FirstName </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">LastName </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <h2>user detail</h2>
          <p>firstName: {firstName}</p>
          <p>lastName: {lastName}</p>
          <p>
            fullName <DisplayFullName fullName={fullName} />
          </p>
        </div>
      </form>
    </>
  );
}

export default UserForm;
