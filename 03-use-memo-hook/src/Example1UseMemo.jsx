import { useMemo, useState } from "react";
import { format } from "date-fns";
import { findFibonacci } from "./fibonacci";
import useTime from "./useTime";

// 1 - 16 fibonacci
// 0 1 1 2 3 5

function Example1UseMemo() {
  //   console.log("ExampleUseMemo rendered");
  const [selectNumber, setSelectNumber] = useState(1);
  const time = useTime();
  const fibNums = useMemo(() => {
    const result = [];
    for (let i = 0; i < selectNumber; i++) {
      console.log("calculating fibs");
      result.push(findFibonacci(i));
    }
    return result;
  }, [selectNumber]);
  return (
    <>
      <div>
        <h2>Time: {format(time, "hh:mm:ss a")}</h2>
        <input
          style={{ padding: "1rem", fontSize: "1rem", borderRadius: "5px" }}
          type="number"
          name="number"
          id="number"
          value={selectNumber}
          onChange={(e) => setSelectNumber(e.target.value)}
        />
        {selectNumber > 0 && (
          <div>
            <h2>First {selectNumber} fibonacci numbers are</h2>
            {fibNums.join(", ")}
          </div>
        )}
      </div>
    </>
  );
}

export default Example1UseMemo;
