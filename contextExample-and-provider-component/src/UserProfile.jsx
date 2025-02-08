import BasicDetail from "./BasicDetail";
import { useAuth } from "./AuthProvider";
function UserProfile() {
  const { auth, setAuth } = useAuth();
  function handleLogin() {
    setAuth({ username: "Rohit", email: "rohitkumar@gmail.com" });
  }
  return (
    <>
      <h1>UserProfile</h1>
      {auth.username ? (
        <BasicDetail />
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
}

export default UserProfile;
