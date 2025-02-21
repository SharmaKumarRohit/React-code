import { useState, useMemo } from "react";
import DisplayFruits from "./DisplayFruits";

// state change --> component re-render
// case of reference type -->
// 0x11
// 0x12

function Example2UseMemo() {
  const [username, setUsername] = useState("");
  //   const fruits = [
  //     { fruitName: "Apple", emoji: "🍎" },
  //     { fruitName: "Grapes", emoji: "🍇" },
  //     { fruitName: "Mango", emoji: "🥭" },
  //   ];
  const fruits = useMemo(() => {
    return [
      { fruitName: "Apple", emoji: "🍎" },
      { fruitName: "Grapes", emoji: "🍇" },
      { fruitName: "Mango", emoji: "🥭" },
    ];
  }, []);
  return (
    <div>
      <label htmlFor="username">Username</label>
      <br />
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <DisplayFruits fruits={fruits} />
    </div>
  );
}

export default Example2UseMemo;
