import User from "./components/User";

const Users = [
  { id: 1, firstName: "Rohit", lastName: "Kumar" },
  { id: 2, firstName: "John", lastName: "Doe" },
  { id: 3, firstName: "Jane", lastName: "Doe" },
];

// function App() {
//   return (
//     <>
//       {/* {Users.map((user) => {
//         return <User firstName={user.firstName} lastName={user.lastName} />;
//       })} */}

//       {Users.map((user) => (
//         <User firstName={user.firstName} lastName={user.lastName} />
//       ))}
//     </>
//   );
// }

function App() {
  return (
    <>
      {Users.map((user) => (
        <User {...user} key={user.id} /> // use only id in the list
      ))}
      {/* {Users.map((user, index) => (
        <User {...user} key={index} /> // avoid use index
      ))} */}
    </>
  );
}

// function App() {
//   return (
//     <>
//       <User firstName={Users[0].firstName} lastName={Users[0].lastName} />
//       <User firstName={Users[1].firstName} lastName={Users[1].lastName} />
//       <User firstName={Users[2].firstName} lastName={Users[2].lastName} />
//     </>
//   );
// }

export default App;
