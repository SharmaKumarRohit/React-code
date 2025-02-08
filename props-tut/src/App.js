import Greeting from "./components/Greeting";

// function App() {
//   return (
//     <>
//       <Greeting firstName="Rohit" lastName="Kumar" />
//       <Greeting firstName="Abhay" lastName="Sharma" />
//       <Greeting firstName="myComputer" lastName="Sharma" />
//     </>
//   );
// }

// function App() {
//   const carInfo = { carName: "Ford", model: "Mustang" };
//   return (
//     <>
//       <h1>Greeting Inside App</h1>
//       <Greeting brand={carInfo} />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Greeting firstName="Rohit" lastName="Kumar" />
//       <Greeting firstName="Abhay" lastName="Sharma" />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Greeting>
//         <h1>Hi there, I am Greeting</h1>
//         <p>This is a Paragraph.</p>
//       </Greeting>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Greeting firstName="Abhay" lastName="Sharma">
//         <h1>Hi there, I am Greeting</h1>
//         <p>This is a Paragraph.</p>
//       </Greeting>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Greeting firstName="Abhay" lastName="Sharma">
        <h1>Hi there, I am Greeting</h1>
        <p>This is a Paragraph.</p>
      </Greeting>
    </>
  );
}

export default App;
