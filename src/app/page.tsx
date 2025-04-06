import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Image src={logo} alt="Budgex" height={56} className={styles.logo} />
        <div>
          <Link href="/signup" className={styles.signup}>Sign Up</Link>
          <Link href="/login" className={styles.login}>Login</Link>
        </div>
      </div>

      <div className={styles.landing}>
        <h1 className={styles.heading}>Budgex</h1>
        <div>Personal Financial Tracker</div>
      </div>
    </main>
  );
}
