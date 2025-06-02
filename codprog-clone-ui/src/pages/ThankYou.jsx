import { Link } from "react-router-dom";
import Container from "../components/UI/Container";
import styles from "./ThankYou.module.css";

function Thankyou() {
  return (
    <Container>
      <section className={styles.thankyou_container}>
        <div className={styles.thankyou_content}>
          <h1 className={styles.title}>Thank you for purchasing the course!</h1>
          <h2 className={styles.message}>
            You can view your course on the{" "}
            <Link to={"/my-courses"} className={styles.link}>
              My Courses
            </Link>
          </h2>
        </div>
      </section>
    </Container>
  );
}

export default Thankyou;
