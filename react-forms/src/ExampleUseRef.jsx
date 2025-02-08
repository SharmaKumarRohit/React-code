import { useState, useRef } from "react";

// useRef
// Example of useRef
// difference between useRef ans useState
// handle form inputs using useRef

// function ExampleUseRef() {
//   console.log("component rerended");
//   const username = useRef("Rohit");
//   //   console.log(username);
//   const handleClick = () => {
//     username.current = "Abhay";
//     console.log(username.current);
//   };
//   return (
//     <>
//       <div>
//         <h1>Hello {username.current}</h1>
//         <button onClick={handleClick}>Change Name</button>
//       </div>
//     </>
//   );
// }

// function ExampleUseRef() {
//   const h1Ref = useRef();
//   const handleClick = () => {
//     console.log(h1Ref);
//   };
//   return (
//     <>
//       <div>
//         <h1>Hello there</h1>
//         <button onClick={handleClick}>Show Value</button>
//       </div>
//     </>
//   );
// }

// function ExampleUseRef() {
//   const h1Ref = useRef();
//   const handleClick = () => {
//     // console.log(h1Ref);
//     const h1Element = h1Ref.current;
//     // console.log(h1Element);
//     h1Element.textContent = "Hii there";
//     h1Element.style.backgroundColor = "black";
//     h1Element.style.color = "white";
//   };
//   return (
//     <>
//       <h1 ref={h1Ref}>Hello there</h1>
//       <button onClick={handleClick}>Change Content</button>
//     </>
//   );
// }

// function ExampleUseRef() {
//   console.log("component re-rendered");
//   const h1Ref = useRef();
//   const handleClick = () => {
//     // console.log(h1Ref);
//     const h1Element = h1Ref.current;
//     // console.log(h1Element);
//     h1Element.textContent = "Hii there";
//     h1Element.style.backgroundColor = "blue";
//     h1Element.style.color = "white";
//   };
//   return (
//     <>
//       <h1 ref={h1Ref}>Hello there</h1>
//       <button onClick={handleClick}>Change Content</button>
//     </>
//   );
// }

// function ExampleUseRef() {
//   const h1Ref = useRef();
//   const handleClick = () => {
//     const h1Element = h1Ref.current;
//     h1Element.textContent = "Hii there";
//     h1Element.style.color = "red";
//   };
//   return (
//     <>
//       <h1 ref={h1Ref}>Hello there</h1>
//       <button onClick={handleClick}>Change Content</button>
//     </>
//   );
// }

// function ExampleUseRef() {
//   const inputRef = useRef();
//   const passwordRef = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(inputRef);
//     // console.log(inputRef.current);
//     const inputElement = inputRef.current;
//     console.log(inputElement.value);
//     const passwordElement = passwordRef.current;
//     console.log(passwordElement.value);
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username</label>
//         <br />
//         <input type="text" id="username" ref={inputRef} />
//         <br />
//         <label htmlFor="password">Password</label>
//         <br />
//         <input type="password" id="password" ref={passwordRef} />
//         <br />
//         <br />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

function ExampleUseRef() {
  const inputRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef);
    // console.log(inputRef.current);
    const inputElement = inputRef.current;
    // console.log(inputElement.value);
    // alert(inputElement.value);
    console.log(inputElement.value);
    const passwordElement = passwordRef.current;
    console.log(passwordElement.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <br />
        <input type="text" id="username" ref={inputRef} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" ref={passwordRef} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

// function ExampleUseRef() {
//   const inputRef = useRef();
//   const handleClick = () => {
//     inputRef.current.focus();
//   };
//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Focus</button>
//     </>
//   );
// }

// function ExampleUseRef() {
//   console.log("component rerendered");
//   const [counter, setCounter] = useState(1);
//   const [username, setUsername] = useState("Rohit");
//   return (
//     <>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>Increase</button>
//       <h4>{username}</h4>
//       <button onClick={() => setUsername("Abhay")}>Change Name</button>
//     </>
//   );
// }

export default ExampleUseRef;
