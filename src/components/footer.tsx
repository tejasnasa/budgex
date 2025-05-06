import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/tejasnasa/"
        className={styles.thing2}
        target="_blank"
      >
        Contact Us
      </a>
      <div className={styles.thing1}>
        <a href="https://github.com/tejasnasa/budgex" target="_blank">
          GitHub
        </a>{" "}
        | © 2025
      </div>
    </div>
  );
}
