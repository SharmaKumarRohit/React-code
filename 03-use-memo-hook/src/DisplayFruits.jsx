import { memo } from "react";

function DisplayFruits({ fruits }) {
  console.log("re-renders fruits");
  return (
    <div>
      <h1>Fruits</h1>
      {fruits.map((fruit) => (
        <div key={fruit.fruitName}>
          <span>{fruit.emoji}</span> <span>{fruit.fruitName}</span>
        </div>
      ))}
    </div>
  );
}

export default memo(DisplayFruits);
