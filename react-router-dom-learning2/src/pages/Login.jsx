import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  // method : 1
  // const location = useLocation();
  // const url = location.search;
  // const searchParams = new URLSearchParams(url);
  // console.log(searchParams.get("a"));
  // console.log(searchParams.get("b"));
  // console.log(searchParams.get("c"));
  // method : 2
  const [searchParams] = useSearchParams();
  const previousPath = searchParams.get("redirectTo") || "/";
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate(previousPath, { replace: true });
    }
  }, [isLoggedIn]);
  function login() {
    setIsLoggedIn(true);
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
