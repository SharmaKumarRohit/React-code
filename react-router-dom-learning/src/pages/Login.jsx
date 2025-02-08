import { useAuth } from "../context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.previousPath || "/";
  function login() {
    setIsLoggedIn(true);
    navigate(previousPath, { replace: true });
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
