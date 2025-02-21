import { useState } from "react";

function InputElement({ children }) {
  const [username, setUsername] = useState("");
  console.log("InputElement component rerendered");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="off"
      />
      {children}
      <button onClick={() => setUsername("")}>clear</button>
    </form>
  );
}

export default InputElement;
