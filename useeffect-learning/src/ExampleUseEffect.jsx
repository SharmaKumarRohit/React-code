import { useState, useEffect } from "react";

// useEffect
// fetch data from api
// eventListeners
// sideEffect

// useEffect
// it takes callback function as input

// useEffect
// first argument : callback function
// second argument : dependency array

// dependency array rules
// [] ---> useEffect will be called only once
// dependency array with some value

// Jab koe bhi depencency array pass nahi karega tab.
// function ExampleUseEffect() {
//   console.log("Component Rerendered");
//   useEffect(() => {
//     console.log("Inside useEffect");
//   });
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <div>
//         <h1>Count: {count}</h1>
//         <button onClick={() => setCount((prevState) => prevState + 1)}>
//           Increase
//         </button>
//       </div>
//     </>
//   );
// }

// jab empty dependency array ko pass karega tab.
// function ExampleUseEffect() {
//   console.log("Component Rendered");
//   useEffect(() => {
//     console.log("Inside useEffect");
//   }, []);
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount((prevState) => prevState + 1)}>
//         Increase
//       </button>
//     </>
//   );
// }

// pass dependency array with some value
function ExampleUseEffect() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("Component Rendered");
  useEffect(() => {
    console.log("Inside UseEffect");
  }, [count1]); /* Jab count1 ka state change hoga, tab useEffect call hoga.
                   But jab count2 ka state change hoga, tab useEffect call nahi hoga. */
  return (
    <>
      <div>
        <h1>Count1: {count1}</h1>
        <button onClick={() => setCount1((prevState) => prevState + 1)}>
          Increase
        </button>
      </div>
      <div>
        <h1>Count2: {count2}</h1>
        <button onClick={() => setCount2((prevState) => prevState + 1)}>
          Increase
        </button>
      </div>
    </>
  );
}

export default ExampleUseEffect;
