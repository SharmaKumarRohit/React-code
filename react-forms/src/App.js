// <---------------------------- Form Input ------------------------------------>
// import { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");
//   function handleUsername(e) {
//     setUsername(e.target.value);
//   }
//   return (
//     <div>
//       <h1>React Form</h1>
//       <form>
//         <label htmlFor="username">Username: </label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsername}
//         ></input>
//       </form>
//     </div>
//   );
// }

// function App() {
//   const [username, setUsername] = useState("");
//   return (
//     <div>
//       <h1>React Form</h1>
//       <form>
//         <label htmlFor="username">Username: </label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         ></input>
//       </form>
//     </div>
//   );
// }
// export default App;

// <---------------------------- Submit Event ---------------------------------->
// import { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     // console.log("form submitted");
//     console.log("Hello:", username);
//   }
//   return (
//     <div>
//       <h1>React Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username: </label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         ></input>
//         <button type="submit">Submit</button>
//       </form>
//       Username: {username}
//     </div>
//   );
// }

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Hello:", username);
//   }
//   return (
//     <div>
//       <h1>React Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username: </label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// <---------------------------- handle radio button --------------------------->
// import { useState } from "react";

// function App() {
//   const [gender, setGender] = useState("");
//   return (
//     <>
//       <div className="App">
//         <label htmlFor="male">Male </label>
//         <input
//           type="radio"
//           checked={gender === "male"}
//           onChange={() => {
//             setGender("male");
//           }}
//         ></input>
//         <br />
//         <label htmlFor="female">Female </label>
//         <input
//           type="radio"
//           checked={gender === "female"}
//           onChange={() => {
//             setGender("female");
//           }}
//         ></input>
//       </div>
//     </>
//   );
// }

// function App() {
//   const [gender, setGender] = useState("");
//   return (
//     <>
//       <div className="App">
//         <label htmlFor="male">Male </label>
//         <input
//           type="radio"
//           id="male"
//           checked={gender === "male"}
//           onChange={() => setGender("male")}
//         ></input>
//         <br />
//         <label htmlFor="female">Female </label>
//         <input
//           type="radio"
//           id="female"
//           checked={gender === "female"}
//           onChange={() => setGender("female")}
//         ></input>
//         <br />
//         <label htmlFor="others">Others </label>
//         <input
//           type="radio"
//           id="others"
//           checked={gender === "others"}
//           onChange={() => setGender("others")}
//         ></input>
//       </div>
//     </>
//   );
// }

// import HandleMultipleInputs from "./HandleMultipleInputs";

// function App() {
//   return (
//     <>
//       <div className="App">
//         <HandleMultipleInputs />
//       </div>
//     </>
//   );
// }

import ExampleUseRef from "./ExampleUseRef";

function App() {
  return (
    <>
      <div className="App">
        <ExampleUseRef />
      </div>
    </>
  );
}

export default App;
