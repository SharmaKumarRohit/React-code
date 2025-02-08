import { useState, useEffect } from "react";
import User from "./User";

// const URL = "https://jsonplaceholder.typicode.com/users";
// promise
// async await

// function FetchDataExample() {
//   console.log("Component Rendered");
//   useEffect(() => {
//     fetch(URL)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       });
//   }, []);
//   return (
//     <>
//       <div>FetchDataExample</div>
//     </>
//   );
// }

// function FetchDataExample() {
//   async function fetchData() {
//     const response = await fetch(URL);
//     const data = await response.json();
//     console.log(data);
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <>
//       <div>FetchDataExample</div>
//     </>
//   );
// }

// Api se joo bhi data fetch hoga. Usha ham kaha store karega, state mai store karega.
// function FetchDataExample() {
//   const [users, setUsers] = useState([]);
//   const fetchData = async () => {
//     const response = await fetch(URL);
//     const data = await response.json();
//     setUsers(data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <>
//       <div>FetchDataExample</div>
//     </>
//   );
// }

// Display API data on the page
// function FetchDataExample() {
//   const [users, setUsers] = useState([]);
//   const fetchData = async () => {
//     const response = await fetch(URL);
//     const data = await response.json();
//     setUsers(data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <>
//       <div className="App">
//         {users.map((user) => (
//           <User key={user.id} {...user} />
//         ))}
//       </div>
//     </>
//   );
// }

// Loading throttling
// function FetchDataExample() {
//   const [users, setUsers] = useState([]);
//   //   const [isLoading, setIsLoading] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const fetchData = async () => {
//     // setIsLoading(true);
//     const response = await fetch(URL);
//     const data = await response.json();
//     setUsers(data);
//     setIsLoading(false);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   if (isLoading) {
//     return <h1>Loading ...</h1>;
//   }
//   return (
//     <>
//       <div className="App">
//         {users.map((user) => (
//           <User key={user.id} {...user} />
//         ))}
//       </div>
//     </>
//   );
// }

// const URL = "https://jsonplaceholder.typicode.com/users";

// Handle errors in fetch API.
// function FetchDataExample() {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const fetchData = async () => {
//     const response = await fetch(URL);
//     if (!(response.status >= 200 && response.status <= 299)) {
//       setIsError(true);
//       setErrorMsg(`${response.status} Error`);
//       setIsLoading(false);
//       return;
//     }
//     const data = await response.json();
//     setUsers(data);
//     setIsLoading(false);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   if (isLoading) {
//     return <h1>Loading ...</h1>;
//   }
//   if (isError) {
//     return <h1>{errorMsg}</h1>;
//   }
//   return (
//     <>
//       <div className="App">
//         {users.map((user) => (
//           <User key={user.id} {...user} />
//         ))}
//       </div>
//     </>
//   );
// }

// Without using StrictMode
// To abort a network request when a component unmounts, you can use the AbortController
// function FetchDataExample() {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;
//     const fetchData = async () => {
//       const response = await fetch(URL, { signal: signal });
//       if (!(response.status >= 200 && response.status <= 299)) {
//         setIsError(true);
//         setErrorMsg(`${response.status} error`);
//         setIsLoading(false);
//         return;
//       }
//       const data = await response.json();
//       console.log(data);
//       setUsers(data);
//       setIsLoading(false);
//     };
//     fetchData();
//     return () => {
//       console.log("aborting request ...");
//       controller.abort();
//     };
//   }, []);
//   if (isLoading) {
//     return <h1>Loading ...</h1>;
//   }
//   if (isError) {
//     return <h1>{errorMsg}</h1>;
//   }
//   return (
//     <>
//       <div className="App">
//         {users.map((user) => (
//           <User key={user.id} {...user} />
//         ))}
//       </div>
//     </>
//   );
// }

const URL = "https://jsonplaceholder.typicode.com/users";

// strict mode

// on component mount

// effect run
// cleanup function
// effect run

// Fetch data with Strict Mode
function FetchDataExample() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    // console.log("useEffect callback invoked");
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      const response = await fetch(URL, { signal: signal });
      if (!(response.status >= 200 && response.status <= 299)) {
        setIsError(true);
        setErrorMsg(`${response.status} error`);
        setIsLoading(false);
        return;
      }
      const data = await response.json();
      console.log(data);
      setUsers(data);
      setIsLoading(false);
    };
    fetchData();
    return () => {
      console.log("aborting request .....");
      controller.abort();
    };
  }, []);
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>{errorMsg}</h1>;
  }
  return (
    <>
      <div className="App">
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </>
  );
}

export default FetchDataExample;
