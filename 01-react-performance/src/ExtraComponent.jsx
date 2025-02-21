import React from "react";

function ExtraComponent() {
  console.log("extra component rerendered");
  return (
    <div className="card" style={{ backgroundColor: "#e6e8e8" }}>
      <h2>ExtraComponent</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        laboriosam.
      </div>
    </div>
  );
}

export default ExtraComponent;
