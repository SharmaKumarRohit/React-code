import {
  Outlet,
  NavLink,
  Form,
  useRouteLoaderData,
  useNavigation,
} from "react-router-dom";
import Loader from "../components/UI/Loader";
import styles from "./RootLayout.module.css";
import logoutIcon from "../assets/logoutIcon.svg";
import Container from "../components/UI/Container";
import {
  RiGithubFill,
  RiYoutubeFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";
import webLogo from "../assets/favicon.png";
import { useState, useEffect } from "react";

function RootLayout() {
  const user = useRouteLoaderData("parentRoute");
  const navigation = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        style={{
          backgroundColor: scrolled ? "var(--card-bg)" : "var(--bg-color)",
          boxShadow: scrolled ? "var(--bg-color) 0px 4px 6px 0px" : "none",
        }}
        className={styles.header}
      >
        <Container>
          <nav className={`${styles.nav}`}>
            <h1 className={styles.logo}>
              <NavLink to="/">
                <div className={styles.logo_full}>
                  <span className={styles.course}>Course</span>
                  <span className={styles.engine}>Engine</span>
                </div>
                <div className={styles.logo_short}>
                  <span className={styles.course}>C</span>
                  <span className={styles.engine}>E</span>
                </div>
              </NavLink>
            </h1>
            <ul className={styles.navItem}>
              {user && (
                <li className={styles.hoverEffect}>
                  <NavLink to="my-courses">My Courses</NavLink>
                </li>
              )}
              {!user && (
                <li className={styles.hoverEffect}>
                  <NavLink to="login">Login</NavLink>
                </li>
              )}
              {!user && (
                <li className={styles.hoverEffect}>
                  <NavLink to="signup">Signup</NavLink>
                </li>
              )}
            </ul>
            {user && (
              <Form action="logout" method="POST">
                <button className={styles.logoutBtn}>
                  {navigation.state === "submitting" ? "Logout..." : "Logout"}
                  <img
                    src={logoutIcon}
                    alt="Logout SVG"
                    className={styles.logoutSvg}
                  />
                </button>
              </Form>
            )}
          </nav>
        </Container>
      </header>
      <main>{navigation.state === "loading" ? <Loader /> : <Outlet />}</main>
      <footer className={styles.footer_container}>
        <Container>
          <div className={styles.footer_content}>
            <div className={styles.copyright}>
              <img src={webLogo} alt="logo" />
              <p>CourseEngine &copy; 2025</p>
            </div>
            <div className={styles.social_container}>
              <a
                href="https://github.com/SharmaKumarRohit?tab=repositories"
                target="_blank"
              >
                <RiGithubFill size={25} className={styles.social_icon} />
              </a>
              <a href="https://www.youtube.com/@sharmaeditx375" target="_blank">
                <RiYoutubeFill size={25} className={styles.social_icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-kumar-4685252b6/"
                target="_blank"
              >
                <RiLinkedinBoxFill size={25} className={styles.social_icon} />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default RootLayout;
