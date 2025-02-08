// function App() {
//   function handleClick() {
//     console.log("You clicked Me !");
//   }
//   return (
//     <>
//       <div className="App">
//         <h1>App</h1>
//         <button onClick={handleClick}>Click Me</button>
//       </div>
//     </>
//   );
// }

// function App() {
//   function handleClick(e) {
//     console.log(e);
//     // e.target.textContent = "You Clicked Me !!";
//     // console.log("You Clicked Me !!");
//   }
//   return (
//     <>
//       <div>
//         <h1>App</h1>
//         <button onClick={handleClick}>Click Me</button>
//       </div>
//     </>
//   );
// }

// function App() {
//   // function handleClick(e) {
//   //   e.target.textContent = "You Clicked Me !";
//   // }

//   function handleClick2(firstName, lastName) {
//     console.log(firstName, lastName);
//   }

//   // wrapper function
//   // function wrapper() {
//   //   handleClick2("Rohit", "Kumar");
//   // }
//   return (
//     <>
//       <div className="App">
//         <h1>App</h1>
//         {/* <button onClick={handleClick}>Click Me</button> */}
//         <br />
//         <br />
//         {/* <button onClick={wrapper}>Click Me 2</button> */}
//         <button
//           onClick={(e) => {
//             e.target.textContent = "You Clicked Me";
//             handleClick2("Rohit", "Kumar");
//           }}
//         >
//           Click Me 2
//         </button>
//       </div>
//     </>
//   );
// }

import Greeting from "./Greeting";

function App() {
  function handleClick(e) {
    e.target.textContent = "You Clicked Me !";
    console.log("Hello World");
  }

  function handleClick2(fname, lname) {
    console.log(fname, lname);
  }

  // function wrapper() {
  //   handleClick2("Rohit", "Kumar");
  // }
  return (
    <>
      <div className="App">
        <h1>App</h1>
        <button onClick={handleClick}>Click Me</button>
        <br />
        <br />
        {/* <button onClick={wrapper}>Click Me 2</button> */}
        <button
          onClick={(e) => {
            e.target.textContent = "You Clicked Me";
            handleClick2("Rohit", "Kumar");
          }}
        >
          Click Me 2
        </button>
        <Greeting handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
