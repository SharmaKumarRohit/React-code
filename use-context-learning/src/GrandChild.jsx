import { useContext } from "react";
import { MyAppContext } from "./App";
// step 1 : import useContext
// step 2 : import MyAppContext
function GrandChild() {
  const { someFunction, key1 } = useContext(MyAppContext);
  return (
    <>
      <div
        style={{
          backgroundColor: "#989FCE",
          padding: "2rem",
        }}
      >
        <h1>GrandChild</h1>
        <p>{key1}</p>
        <button onClick={someFunction}>Call My Func</button>
      </div>
    </>
  );
}

export default GrandChild;
