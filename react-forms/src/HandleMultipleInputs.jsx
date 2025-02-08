import { useState } from "react";

// function HandleMultipleInputs() {
//   // firstName
//   // lastName
//   // username
//   // email
//   // password
//   // confirm password
//   // phone number
//   // address
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("FirstName:", firstName);
//     console.log("LastName:", lastName);
//     console.log("Username:", username);
//     console.log("Password:", password);
//     console.log("Confirm Password:", confirmPassword);
//     console.log("Email:", email);
//     console.log("phone:", phone);
//     console.log("address:", address);
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">FirstName </label> <br />
//           <input
//             type="text"
//             name="firstName"
//             id="firstName"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">LastName </label> <br />
//           <input
//             type="text"
//             name="lastName"
//             id="lastName"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="username">Username </label> <br />
//           <input
//             type="text"
//             name="username"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email </label> <br />
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password </label> <br />
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password </label> <br />
//           <input
//             type="password"
//             name="confirmPassword"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="phone">Phone </label> <br />
//           <input
//             type="phone"
//             name="phone"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="address">Address </label> <br />
//           <input
//             type="address"
//             name="address"
//             id="address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <div>
//           <input type="submit" value="Signup" style={{ marginTop: "1rem" }} />
//         </div>
//       </form>
//     </>
//   );
// }

// function HandleMultipleInputs() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phone: "",
//     address: "",
//   });
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("FirstName:", formData.firstName);
//     console.log("LastName:", formData.lastName);
//     console.log("Username:", formData.userName);
//     console.log("Password:", formData.password);
//     console.log("Confirm Password:", formData.confirmPassword);
//     console.log("Email:", formData.email);
//     console.log("phone:", formData.phone);
//     console.log("address:", formData.address);
//   }
//   const handleChange = (e) => {
//     // console.log(e.target.id);
//     // console.log(e.target.name);

//     // setFormData((previousState) => {
//     //   return { ...previousState, [e.target.id]: e.target.value };
//     // });

//     setFormData((previousState) => ({
//       ...previousState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">FirstName </label> <br />
//           <input
//             type="text"
//             name="firstName"
//             id="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">LastName </label> <br />
//           <input
//             type="text"
//             name="lastName"
//             id="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="userName">UserName </label> <br />
//           <input
//             type="text"
//             name="userName"
//             id="userName"
//             value={formData.userName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email </label> <br />
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password </label> <br />
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password </label> <br />
//           <input
//             type="confirmPassword"
//             name="confirmPassword"
//             id="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="phone">Phone </label> <br />
//           <input
//             type="phone"
//             name="phone"
//             id="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="address">Address </label> <br />
//           <input
//             type="text"
//             name="address"
//             id="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>
//         <input type="submit" value="signup" style={{ marginTop: "1rem" }} />
//       </form>
//     </>
//   );
// }

function HandleMultipleInputs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("FirstName:", firstName);
    console.log("LastName:", lastName);
    console.log("Username:", userName);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Email:", email);
    console.log("phone:", phone);
    console.log("address:", address);
  }
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
    phone,
    address,
  } = formData;
  const handleChange = (e) => {
    // console.log(e.target.id);
    // console.log(e.target.name);
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">FirstName </label> <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">LastName </label> <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="userName">UserName </label> <br />
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label> <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label> <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password </label> <br />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone </label> <br />
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address </label> <br />
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Signup" style={{ marginTop: "1rem" }} />
      </form>
    </>
  );
}

export default HandleMultipleInputs;
