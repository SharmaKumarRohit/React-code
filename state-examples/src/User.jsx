// <----------------------------- First Read State Value -------------------------->
// function User({ firstName, lastName, age }) {
//   return (
//     <div className="user">
//       <p>firstName: {firstName}</p>
//       <p>lastName: {lastName}</p>
//       <p>age: {age}</p>
//     </div>
//   );
// }
// export default User;

// <------------------------- Second Read and Update State Value ----------------------->
// function User({ firstName, lastName, age, id, increaseAge }) {
//   console.log("User Rerendered");
//   return (
//     <div className="user">
//       <p>firstName: {firstName}</p>
//       <p>lastName: {lastName}</p>
//       <p>id: {id}</p>
//       <p>age: {age}</p>
//       <button
//         onClick={() => {
//           increaseAge(id);
//         }}
//       >
//         Increase Age
//       </button>
//     </div>
//   );
// }
// export default User;

// <--------------------- Third Read, Update and Delete State Value --------------------->
// function User({ firstName, lastName, age, id, increaseAge, deleteUser }) {
//   return (
//     <div className="user">
//       <p>firstName: {firstName}</p>
//       <p>lastName: {lastName}</p>
//       <p>age: {age}</p>
//       <p>id: {id}</p>
//       <button onClick={() => increaseAge(id)}>Increase Age</button>
//       <button onClick={() => deleteUser(id)}>Delete User</button>
//     </div>
//   );
// }
// export default User;

function User({ firstName, lastName, age, id, increaseAge, deleteUser }) {
  return (
    <div className="user">
      <p>firstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>id: {id}</p>
      <p>age: {age}</p>
      <button
        onClick={() => {
          increaseAge(id);
        }}
      >
        Increase Age
      </button>
      <button
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete User
      </button>
    </div>
  );
}

export default User;
