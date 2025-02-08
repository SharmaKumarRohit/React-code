import { createPortal } from "react-dom";
function MyComponent() {
  return createPortal(
    <>
      <h1>My component heading</h1>
      <p>My component paragraph</p>
    </>,
    document.getElementById("newRoot")
  );
}

export default MyComponent;
