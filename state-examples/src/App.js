// <----------------------------- First Read State Value -------------------------->
// import { useState } from "react";
// import Users from "./Users";
// function App() {
//   const [users, setUsers] = useState([
//     { id: 1, firstName: "Rohit", lastName: "Kumar", age: 23 },
//     { id: 2, firstName: "Abhay", lastName: "Sharma", age: 22 },
//     { id: 3, firstName: "myComputer", lastName: "Sharma", age: 1.5 },
//   ]);
//   return (
//     <div>
//       <h1>useState Example</h1>
//       <Users users={users} />
//     </div>
//   );
// }
// export default App;

// <--------------------------- Second Read and Update State Value ---------------------->
// import { useState } from "react";
// import Users from "./Users";
// function App() {
//   console.log("App Rerendered");
//   const [users, setUsers] = useState([
//     { id: 1, firstName: "Rohit", lastName: "Kumar", age: 23 },
//     { id: 2, firstName: "Abhay", lastName: "Sharma", age: 22 },
//     { id: 3, firstName: "myComputer", lastName: "Sharma", age: 1.5 },
//   ]);
//   function increaseAge(id) {
//     // console.log(id);
//     // console.log("You try to increase age");
//     // Beginner Way
//     // const newState = [];
//     // for (let user of users) {
//     //   if (user.id === id) {
//     //     newState.push({ ...user, age: user.age + 1 });
//     //   } else {
//     //     newState.push(user);
//     //   }
//     // }
//     // setUsers(newState);
//     // react developer way
//     setUsers((previousState) => {
//       return previousState.map((user) => {
//         if (user.id === id) {
//           return { ...user, age: user.age + 1 };
//         } else {
//           return user;
//         }
//       });
//     });
//   }
//   return (
//     <div>
//       <h1>State Example</h1>
//       <Users users={users} increaseAge={increaseAge} />
//     </div>
//   );
// }
// export default App;

// <--------------------- Third Read, Update and Delete State Value --------------------->
// import { useState } from "react";
// import Users from "./Users";
// function App() {
//   const [users, setUsers] = useState([
//     { id: 1, firstName: "Rohit", lastName: "Kumar", age: 23 },
//     { id: 2, firstName: "Abhay", lastName: "Sharma", age: 22 },
//     { id: 3, firstName: "myComputer", lastName: "Sharma", age: 1.5 },
//   ]);
//   const increaseAge = (id) => {
//     setUsers((previousState) => {
//       return previousState.map((user) => {
//         if (user.id === id) {
//           return { ...user, age: user.age + 1 };
//         } else {
//           return user;
//         }
//       });
//     });
//   };
//   const deleteUser = (id) => {
//     // console.log(id, "delete user");

//     // Beginner Way
//     // const newState = [];
//     // for (let user of users) {
//     //   if (user.id !== id) {
//     //     newState.push(user);
//     //   }
//     // }
//     // setUsers(newState);

//     // react developer way
//     // setUsers((previousState) => {
//     //   return previousState.filter((user) => {
//     //     return user.id !== id;
//     //   });
//     // });

//     // implicit return
//     setUsers((previousState) => previousState.filter((user) => user.id !== id));
//   };
//   return (
//     <div>
//       <h1>State Example</h1>
//       <Users users={users} increaseAge={increaseAge} deleteUser={deleteUser} />
//     </div>
//   );
// }
// export default App;

import { useState } from "react";
import Users from "./Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Rohit", lastName: "Kumar", age: 23 },
    { id: 2, firstName: "Abhay", lastName: "Sharma", age: 22 },
    { id: 3, firstName: "myComputer", lastName: "Sharma", age: 1.5 },
  ]);
  function increaseAge(id) {
    setUsers((previousState) =>
      previousState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      })
    );
  }
  function deleteUser(id) {
    setUsers((previousState) => previousState.filter((user) => user.id !== id));
  }
  return (
    <div>
      <Users users={users} increaseAge={increaseAge} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
