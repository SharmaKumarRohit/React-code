import Child from "./Child";
function MyComponent() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#CCF5AC",
          padding: "2rem",
        }}
      >
        <h1>MyComponent</h1>
        <Child />
      </div>
    </>
  );
}

export default MyComponent;
