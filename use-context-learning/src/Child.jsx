import GrandChild from "./GrandChild";
import { useContext } from "react";
import { MyAppContext } from "./App";

function Child() {
  const { key2 } = useContext(MyAppContext);
  return (
    <>
      <div
        style={{
          backgroundColor: "#BAD29F",
          padding: "2rem",
        }}
      >
        <h1>Child</h1>
        <p>key2: {key2}</p>
        <GrandChild />
      </div>
    </>
  );
}

export default Child;
