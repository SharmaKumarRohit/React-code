import Container from "./UI/Container";
import styles from "./NoFoundContent.module.css";

function NoFoundContent({ children }) {
  return (
    <>
      <Container>
        <div className={styles.content_container}>
          <h1 className={styles.message}>{children}</h1>
        </div>
      </Container>
    </>
  );
}

export default NoFoundContent;
