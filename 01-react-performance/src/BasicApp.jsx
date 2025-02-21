import InputElement from "./InputElement";
import ExtraComponent from "./ExtraComponent";

function BasicApp() {
  console.log("basicApp component rendered");
  return (
    <div>
      <h2>BasicApp</h2>
      <InputElement>
        <ExtraComponent />
      </InputElement>
    </div>
  );
}

export default BasicApp;
