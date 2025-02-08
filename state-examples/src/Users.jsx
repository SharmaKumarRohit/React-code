// <----------------------------- First Read State Value -------------------------->
// import User from "./User";
// function Users({ users }) {
//   return (
//     <div>
//       {users.map((user) => (
//         // <User userDetails={user} key={user.id} />
//         <User {...user} key={user.id} />
//       ))}
//     </div>
//   );
// }
// export default Users;

// <-------------------------- Second Read and Update State Value ----------------------->
// import User from "./User";
// function Users({ users, increaseAge }) {
//   console.log("Users Rerendered");
//   return (
//     <div>
//       {users.map((user) => (
//         <User {...user} increaseAge={increaseAge} key={user.id} />
//       ))}
//     </div>
//   );
// }
// export default Users;

// <--------------------- Third Read, Update and Delete State Value --------------------->
// import User from "./User";
// function Users({ users, increaseAge, deleteUser }) {
//   return (
//     <div>
//       {users.map((user) => (
//         <User
//           {...user}
//           increaseAge={increaseAge}
//           deleteUser={deleteUser}
//           key={user.id}
//         />
//       ))}
//     </div>
//   );
// }
// export default Users;

import User from "./User";

function Users({ users, increaseAge, deleteUser }) {
  return (
    <div>
      {users.map((user) => (
        <User
          {...user}
          key={user.id}
          increaseAge={increaseAge}
          deleteUser={deleteUser}
        />
      ))}
    </div>
  );
}

export default Users;
