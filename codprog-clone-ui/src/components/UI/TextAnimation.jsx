import styles from "./TextAnimation.module.css";

function TextAnimation({ children }) {
  return <h1 className={styles.text_animation}>{children}</h1>;
}

export default TextAnimation;
