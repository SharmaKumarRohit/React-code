// function Greeting({ firstName, lastName }) {
//   // const firstName = props.firstName;
//   // const lastName = props.lastName;
//   // const { firstName, lastName } = props;

//   return (
//     <h1 style={{ fontFamily: "Arial" }}>
//       Hello {firstName} {lastName}
//     </h1>
//   );
// }

// function Greeting({ brand }) {
//   return (
//     <>
//       <h2>
//         I am a {brand.carName} {brand.model}
//       </h2>
//     </>
//   );
// }

// import ShowFullName from "./ShowFullName";

// function Greeting({ firstName, lastName, fullName = "Abhay Sharma" }) {
//   return (
//     <>
//       <h1>Hello {fullName}</h1>
//     </>
//   );
// }

// function Greeting(props) {
//   return (
//     <>
//       <ShowFullName {...props} />
//     </>
//   );
// }

// function Greeting(props) {
//   return <>{props.children}</>;
// }

// function Greeting({ firstName, lastName, children }) {
//   return (
//     <>
//       {children}
//       <h1>
//         {firstName} {lastName}
//       </h1>
//     </>
//   );
// }

function Greeting({ firstName, lastName, children }) {
  return (
    <>
      {children}
      <h1>
        {firstName} {lastName}
      </h1>
    </>
  );
}

export default Greeting;
