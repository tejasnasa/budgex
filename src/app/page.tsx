import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={logo} alt="Budgex" height={56} className={styles.logo} />
      <div className={styles.landing}>
        <h1 className={styles.heading}>Budgex</h1>
        <div>Personal Financial Tracker</div>
      </div>
    </main>
  );
}
