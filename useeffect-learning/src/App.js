import { useState } from "react";
// import FetchDataExample from "./FetchDataExample";
import UserForm from "./UserForm";
import "./App.css";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <>
      <div className="App">
        <label htmlFor="showComponent">showComponent</label>
        <input
          type="checkbox"
          name="showComponent"
          id="showComponent"
          checked={showComponent}
          onChange={() => setShowComponent((prevState) => !prevState)}
        />
        {showComponent && <UserForm />}
      </div>
    </>
  );
}

export default App;
