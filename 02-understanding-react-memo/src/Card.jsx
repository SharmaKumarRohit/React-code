import { memo } from "react";

// t1 --> i should render or not

// t2 --> to render something

// t2 < t1

function Card({ state1 }) {
  console.log("Card rendered");
  return (
    <div
      style={{
        backgroundColor: state1 ? "green" : "red",
        width: "300px",
        height: "100px",
        fontWeight: "bold",
        fontSize: "1.2rem",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      Card based on state1
    </div>
  );
}

export default memo(Card);
