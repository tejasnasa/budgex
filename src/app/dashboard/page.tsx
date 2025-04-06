import List from "@/components/dashboard/list";
import styles from "./page.module.css";
import Header from "@/components/header";
import { prisma } from "@/utils/prisma";
import { Landmark } from "lucide-react";
import WeekGraph from "@/components/dashboard/week-graph";
import MonthGraph from "@/components/dashboard/month-graph";
import MonthPie from "@/components/dashboard/month-pie";
import CreateExpenseForm from "@/components/dashboard/create-expense-form";
import CreateIncomeForm from "@/components/dashboard/create-income-form";
import { cookies } from "next/headers";
import { decrypt } from "@/utils/sessions";

export default async function Dashboard() {
  const cookie = (await cookies()).get("session")?.value;
  const session = (await decrypt(cookie)) as { userId?: string };

  const data = await prisma.expense.findMany({
    where: { userid: session.userId },
    include: {
      category: true,
    },
    orderBy: {
      date: "desc",
    },
  });

  const userData = await prisma.user.findUnique({
    where: {
      id: session.userId,
    },
  });

  return (
    <>
      <Header name={userData?.username} />
      <main className={styles.main}>
        <section className={styles.title}>
          <h2>Dashboard</h2>
          <div className={styles.budget}>
            <div className={styles.budget_label}>
              <Landmark strokeWidth={1} size={28} /> Budget
            </div>
            <div className={styles.budget_value}>₹ {userData?.budget}</div>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.block1}>
            <span className={styles.heading1}>Weekly Expenses</span>
            <WeekGraph data={data} />
          </div>
          <div className={styles.block2}>
            <CreateExpenseForm />
          </div>
          <div className={styles.block3}>
            <span className={styles.heading1}>Weekly Distribution</span>
            <MonthPie data={data} />
          </div>
          <div className={styles.block4}>
            <span className={styles.heading4}>Expenses</span>
            <List data={data} />
          </div>
          <div className={styles.block5}>
            <CreateIncomeForm />
          </div>
          <div className={styles.block6}>
            <span className={styles.heading1}>
              Monthly Distribution{" "}
              <span>
                Spent: ₹{data.reduce((sum, expense) => sum + expense.amount, 0)}
              </span>
            </span>
            <MonthGraph data={data} />
          </div>
        </section>
      </main>
    </>
  );
}
