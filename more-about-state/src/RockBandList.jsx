import { useState } from "react";
import RockBand from "./RockBand";

// function RockBandList() {
//   const [rockBands, setRockBands] = useState([
//     { name: "Queen", id: 1 },
//     { name: "Led Zeppelin", id: 2 },
//     { name: "The Rolling Stones", id: 3 },
//     { name: "The Beatles", id: 4 },
//     { name: "AC/DC", id: 5 },
//     { name: "Pink Floyd", id: 6 },
//     { name: "Nirvana", id: 7 },
//     { name: "Guns N' Roses", id: 8 },
//     { name: "The Who", id: 9 },
//     { name: "Metallica", id: 10 },
//   ]);
//   const handleClick = () => {
//     console.log("Add new rock band");
//     const newBand = {
//       id: crypto.randomUUID(),
//       name: "new rock band",
//     };
//     setRockBands((previousRockBand) => [...previousRockBand, newBand]);
//   };
//   return (
//     <>
//       <ol>
//         {rockBands.map((rockBand) => (
//           <RockBand name={rockBand.name} key={rockBand.id} />
//           //   <RockBand name={rockBand.name} key={crypto.randomUUID()} /> // avoid use
//           //   <RockBand name={rockBand.name} key={Math.random()} /> // avoid use
//         ))}
//         <button onClick={handleClick}>Add New Rock Band</button>
//       </ol>
//     </>
//   );
// }

function RockBandList() {
  const [rockBands, setRockBands] = useState([
    { name: "Queen", id: 1 },
    { name: "Led Zeppelin", id: 2 },
    { name: "The Rolling Stones", id: 3 },
    { name: "The Beatles", id: 4 },
    { name: "AC/DC", id: 5 },
    { name: "Pink Floyd", id: 6 },
    { name: "Nirvana", id: 7 },
    { name: "Guns N' Roses", id: 8 },
    { name: "The Who", id: 9 },
    { name: "Metallica", id: 10 },
  ]);
  function handleClick() {
    console.log("add new Band Rock");
    const newBand = {
      id: crypto.randomUUID(),
      name: "new Band Rock",
    };
    setRockBands((previousRockBand) => [...previousRockBand, newBand]);
  }
  return (
    <>
      <ol>
        {rockBands.map((rockBand) => (
          <RockBand name={rockBand.name} key={rockBand.id} />
          //   <RockBand name={rockBand.name} key={crypto.randomUUID()} />
          //   <RockBand name={rockBand.name} key={Math.random()} />
        ))}
        <button onClick={handleClick}>Add New Band Rock</button>
      </ol>
    </>
  );
}

export default RockBandList;
