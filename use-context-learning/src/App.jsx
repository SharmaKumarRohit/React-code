import "./App.css";
import MyComponent from "./MyComponent";
import { createContext } from "react";

// prop drilling

// ----------------- context wrapper value = {} ----------
// component
//    |
// child
//    |
// grandChild
// ----------------- context wrapper end ----------

// context

// to avoid props drilling we use context

// how to use context?
// step 1 : import createContext from React
// step 2 : create a context outside the component
// step 3 : wrap appliaction in context.Provider

// provider to createContext
// consume to useContext

export const MyAppContext = createContext();

function App() {
  function myFunc() {
    console.log("call from my Func");
  }
  return (
    <>
      <MyAppContext.Provider
        value={{
          key1: "value1",
          key2: "value2",
          someFunction: myFunc,
        }}
      >
        <div
          style={{
            backgroundColor: "#8FDC97",
            padding: "2rem",
            height: "100vh",
          }}
        >
          <h1>App</h1>
          <MyComponent />
        </div>
      </MyAppContext.Provider>
    </>
  );
}

export default App;
