import { useState } from "react";

// function Counter() {
//   const [counter, setCounter] = useState(0);
//   function handleClick() {
//     console.log("function called");
//     setCounter(counter + 1);
//     console.log(counter);
//     // const nextCounter = counter + 1;
//     // setCounter(nextCounter);
//     // console.log(nextCounter);
//   }
//   return (
//     <>
//       <h1>Counter: {counter}</h1>
//       <button onClick={handleClick}>Increase</button>
//     </>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//     // console.log("function called");
//     // setCount(count + 1);
//     // console.log(count);
//     // const nextCount = count + 1;
//     // setCount(nextCount);
//     // console.log(nextCount);
//   }
//   return (
//     <>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleClick}>Increase</button>
//     </>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   };
//   return (
//     <>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleClick}>Increase</button>
//     </>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(() => {
//       console.log("setting state 1");
//       return count + 1;
//     });
//     setCount(() => {
//       console.log("setting state 2");
//       return count + 1;
//     });
//     setCount(() => {
//       console.log("setting state 3");
//       return count + 1;
//     });
//   };

// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount((previousState) => {
//       console.log("setting state 1");
//       return previousState + 3;
//     });
//     // setCount((previousState) => {
//     //   console.log("setting state 1");
//     //   return previousState + 1;
//     // });
//     // setCount((previousState) => {
//     //   console.log("setting state 2");
//     //   return previousState + 1;
//     // });
//     // setCount((previousState) => {
//     //   console.log("setting state 3");
//     //   return previousState + 1;
//     // });
//   };
//   return (
//     <>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleClick}>Increase</button>
//     </>
//   );
// }

import ShowCounterValue from "./ShowCounterValue";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount((previousState) => {
//       console.log("setting state 1");
//       return previousState + 1;
//     });
//   };
//   return (
//     <>
//       <h1>
//         Counter: <ShowCounterValue count={count} />
//       </h1>
//       <button onClick={handleClick}>Increase Count</button>
//     </>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount((previousState) => {
//       console.log("setting count 1");
//       return previousState + 1;
//     });
//   };
//   return (
//     <>
//       <h1>
//         Counter: <ShowCounterValue count={count} />
//       </h1>
//       <button onClick={handleClick}>Increase Count</button>
//     </>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   return (
//     <>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleClick}>Increase Count</button>
//     </>
//   );
// }

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Increase Count</button>
    </>
  );
}

export default Counter;
