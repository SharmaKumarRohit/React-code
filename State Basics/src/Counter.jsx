import { useState } from "react";

// function Counter() {
//   let [value, setValue] = useState(0);
//   function Increase() {
//     setValue(value + 1);
//   }
//   function Reset() {
//     setValue(0);
//   }
//   function Decrease() {
//     setValue(value - 1);
//   }
//   return (
//     <>
//       <div className="Counter">
//         <h1>{value}</h1>
//         <button onClick={Increase}>Increase</button>
//         <button onClick={Reset}>Reset</button>
//         <button onClick={Decrease}>Decrease</button>
//       </div>
//     </>
//   );
// }

// function Counter() {
//   const [value, setValue] = useState(0);

//   return (
//     <>
//       <div className="Counter">
//         <h1>{value}</h1>
//         <button
//           onClick={() => {
//             setValue(value + 1);
//           }}
//         >
//           Increase
//         </button>
//         <button
//           onClick={() => {
//             setValue(0);
//           }}
//         >
//           Reset
//         </button>
//         <button
//           onClick={() => {
//             setValue(value - 1);
//           }}
//         >
//           Decrease
//         </button>
//       </div>
//     </>
//   );
// }

// function Counter() {
//   const [counter, setCounter] = useState(0);
//   const handleIncrease = () => {
//     setCounter(counter + 1);
//   };
//   const handleReset = () => {
//     setCounter(0);
//   };
//   const handleDecrease = () => {
//     setCounter(counter - 1);
//   };
//   return (
//     <>
//       <div className="main_container center">
//         <div className="card_container">
//           <div className="display_counter center">
//             <h1>{counter}</h1>
//           </div>
//           <div className="counter_buttons">
//             <button onClick={handleIncrease}>
//               <i className="ri-add-line"></i>
//             </button>
//             <button onClick={handleReset}>Reset</button>
//             <button onClick={handleDecrease}>
//               <i className="ri-subtract-line"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function Counter() {
//   const [counter, setCounter] = useState(0);
//   const handleIncrease = () => {
//     setCounter((previousState) => {
//       return previousState + 1;
//     });
//   };
//   const handleReset = () => {
//     setCounter(0);
//   };
//   const handleDecrease = () => {
//     setCounter((previousState) => {
//       return previousState - 1;
//     });
//   };
//   return (
//     <>
//       <div className="main_container center">
//         <div className="card_container">
//           <div className="display_counter center">
//             <h1>{counter}</h1>
//           </div>
//           <div className="counter_buttons">
//             <button onClick={handleIncrease}>
//               <i className="ri-add-line"></i>
//             </button>
//             <button onClick={handleReset}>Reset</button>
//             <button onClick={handleDecrease}>
//               <i className="ri-subtract-line"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter((previousState) => previousState + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  const handleDecrease = () => {
    setCounter((previousState) => previousState - 1);
  };
  return (
    <>
      <div className="main_container center">
        <div className="card_container">
          <div className="display_counter center">
            <h1>{counter}</h1>
          </div>
          <div className="counter_buttons">
            <button onClick={handleIncrease}>
              <i className="ri-add-line"></i>
            </button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>
              <i className="ri-subtract-line"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
