import { NavLink, Outlet, useNavigation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import { useAuth } from "../context/AuthProvider";

function RootLayout() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigation = useNavigation();
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.navActive : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? styles.navActive : null)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? styles.navActive : null)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="posts"
              className={({ isActive }) => (isActive ? styles.navActive : null)}
            >
              Posts
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? styles.navActive : null
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
        {isLoggedIn && (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        )}
      </nav>
      <hr />
      <main>
        {navigation.state === "loading" ? <h1>Loading ...</h1> : <Outlet />}
      </main>
    </div>
  );
}

export default RootLayout;
