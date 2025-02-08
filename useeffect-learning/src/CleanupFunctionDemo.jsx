import { useState, useEffect } from "react";

// cleanup function

// 1 : before component unmount(runs the cleanup function)

// 2 : When there is some value inside dependency array
//     When value changes
//     1. component re-render
//     2. cleanup function runs
//     3. useEffect runs

// Before component unmount
// function CleanupFunctionDemo() {
//   console.log("Component Rendered");
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     console.log("effect callback");
//     return function () {
//       console.log("cleanup function");
//     };
//   }, []);
//   return (
//     <>
//       <div>
//         <h1>counter: {counter}</h1>
//         <button onClick={() => setCounter((prevState) => prevState + 1)}>
//           Increase
//         </button>
//       </div>
//     </>
//   );
// }

function CleanupFunctionDemo() {
  console.log("Component Rendered");
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("effect callback");
    return function () {
      console.log("cleanup function");
    };
  }, [counter]);
  return (
    <>
      <div>
        <h1>counter: {counter}</h1>
        <button onClick={() => setCounter((prevState) => prevState + 1)}>
          Increase
        </button>
      </div>
    </>
  );
}

export default CleanupFunctionDemo;
