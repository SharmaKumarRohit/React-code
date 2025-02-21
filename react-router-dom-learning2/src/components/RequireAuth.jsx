import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function RequireAuth({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const loaction = useLocation();
  if (isLoggedIn) {
    return children;
  }
  return (
    <Navigate to="/login" replace state={{ previousPath: location.pathname }} />
  );
}

export default RequireAuth;
