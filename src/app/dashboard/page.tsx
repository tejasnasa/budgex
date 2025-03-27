import List from "@/components/dashboard/list";
import styles from "./page.module.css";
import Header from "@/components/header";
import { prisma } from "@/utils/prisma";
import { Landmark } from "lucide-react";
import WeekGraph from "@/components/dashboard/weekgraph";
import MonthGraph from "@/components/dashboard/monthgraph";
import MonthPie from "@/components/dashboard/monthpie";

export default async function Dashboard() {
  const data = await prisma.expense.findMany({
    include: {
      category: true,
    },
  });

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
          <div className={styles.block1}>
            <span className={styles.heading4}>Weekly Expenses</span>
            <WeekGraph />
          </div>
          <div className={styles.block2}></div>
          <div className={styles.block3}>
            <span className={styles.heading4}>Weekly Distribution</span>
            <MonthPie />
          </div>
          <div className={styles.block4}>
            <span className={styles.heading4}>Expenses</span>
            <List data={data} />
          </div>
          <div className={styles.block5}>Add income</div>
          <div className={styles.block6}>
            <span className={styles.heading4}>Monthly Distribution</span>
            <MonthGraph />
          </div>
        </section>
      </main>
    </>
  );
}
