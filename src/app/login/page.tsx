import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/assets/images/logo.png";

export default function page() {
  return (
    <main className={styles.main}>
      <Image src={logo} alt="Budgex" height={56} className={styles.logo} />
      <section className={styles.box}>
        <h1 className={styles.heading}>Login</h1>
        <form action="" className={styles.form}>
          <input type="text" className={styles.input} />
          <input type="text" className={styles.input} />
          <button className={styles.submit}>Submit</button>
        </form>
      </section>
    </main>
  );
}
