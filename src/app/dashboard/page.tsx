import styles from "@/app/dashboard/page.module.css";
import Header from "@/components/header";
import { Landmark } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.title}>
          <h2>Dashboard</h2>
          <div className={styles.budget}>
            <div className={styles.budget_label}>
              <Landmark strokeWidth={1} size={28} /> Budget
            </div>
            <div className={styles.budget_value}>₹ 3204</div>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.block1}></div>
          <div className={styles.block2}></div>
          <div className={styles.block3}></div>
          <div className={styles.block4}></div>
          <div className={styles.block5}></div>
          <div className={styles.block6}></div>
        </section>
      </main>
    </>
  );
}
