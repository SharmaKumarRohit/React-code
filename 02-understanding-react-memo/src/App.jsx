import Demo from "./Demo";
import "./App.css";
import Extra from "./Extra";

function App() {
  return (
    <>
      <div id="root">
        <h1>React Memo Demo</h1>
        <Demo>
          <Extra />
        </Demo>
      </div>
    </>
  );
}

export default App;
