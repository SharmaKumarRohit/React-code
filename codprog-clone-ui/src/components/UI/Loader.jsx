import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.center}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Loader;
