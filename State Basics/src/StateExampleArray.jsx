import { useState } from "react";
import { v4 as uuid } from "uuid";

// function StateExampleArray() {
//   const [fruits, setFruits] = useState(["Apple", "Mango"]);
//   const addFruit = () => {
//     // setFruits(["newFruit"]);
//     // setFruits([...fruits, "newFruit"]);
//     // setFruits((previousState) => {
//     //   return [...previousState, "newFruit"];
//     // });
//     setFruits((previousState) => [...previousState, "newFruit"]);
//   };
//   return (
//     <>
//       <ul>
//         {fruits.map((fruit) => (
//           <li key={uuid()}>{fruit}</li>
//         ))}
//       </ul>
//       <button onClick={addFruit}>Add Fruit</button>
//     </>
//   );
// }

function StateExampleArray() {
  const [items, setItems] = useState(["item1", "item2"]);
  const addItem = () => {
    setItems((previousState) => [...previousState, "item3"]);
  };
  return (
    <>
      <div>
        <ul>
          {items.map((item) => (
            <li key={uuid()}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>Add Item</button>
      </div>
    </>
  );
}

export default StateExampleArray;
