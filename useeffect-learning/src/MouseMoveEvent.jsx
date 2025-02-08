import { useState, useEffect } from "react";
function MouseMoveEvent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log({ x: e.clientX, y: e.clientY });
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      console.log("cleanup function");
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <p>x: {mousePosition.x}</p>
      <p>y: {mousePosition.y}</p>
    </>
  );
}

export default MouseMoveEvent;
