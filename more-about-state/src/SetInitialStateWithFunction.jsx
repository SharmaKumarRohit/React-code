import { useState } from "react";

// function SetInitialStateWithFunction() {
//   function generateArray() {
//     const randomNums = [];
//     for (let i = 0; i < 10; i++) {
//       randomNums.push(Math.random() * 100);
//     }
//     return randomNums;
//   }
//   const [nums, setNums] = useState(generateArray);
//   const handleClick = () => {
//     setNums((prevNums) => [...prevNums, Math.random() * 100]);
//   };
//   return (
//     <>
//       <ul>
//         {nums.map((num) => (
//           <li>{num}</li>
//         ))}
//       </ul>
//       <button onClick={handleClick}>Add Random Num</button>
//     </>
//   );
// }

function SetInitialStateWithFunction() {
  const [nums, setNums] = useState(() => {
    const randomNums = [];
    for (let i = 0; i < 10; i++) {
      randomNums.push(Math.random() * 100);
    }
    return randomNums;
  });
  const handleClick = () => {
    setNums((prevNums) => [...prevNums, Math.random() * 100]);
  };
  return (
    <>
      <ul>
        {nums.map((num) => (
          <li>{num}</li>
        ))}
        <button onClick={handleClick}>Add Random Num</button>
      </ul>
    </>
  );
}

export default SetInitialStateWithFunction;
