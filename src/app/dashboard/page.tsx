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
import { cookies, headers } from "next/headers";
import { decrypt } from "@/utils/sessions";
import ArrowLink from "@/components/arrow-link";

export default async function Dashboard() {
  const cookie = (await cookies()).get("session")?.value;
  const session = (await decrypt(cookie)) as { userId?: string };
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /mobile/i.test(userAgent);

  const data = await prisma.expense.findMany({
    where: { userid: session.userId },
    include: {
      category: true,
    },
    orderBy: {
      date: "desc",
    },
  });

  console.log(data);

  const userData = await prisma.user.findUnique({
    where: {
      id: session.userId,
    },
  });

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const currentMonthExpenses = data.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });

  const totalSpentThisMonth = currentMonthExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <>
      {!isMobile && <Header name={userData?.username} />}

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
            <ArrowLink url={"/expenses"} />
            <span className={styles.heading1}>Weekly Expenses</span>
            <WeekGraph data={data} />
          </div>
          <div className={styles.block2}>
            <span className={styles.heading1}>Create Expense</span>
            <CreateExpenseForm />
          </div>
          <div className={styles.block3}>
            <ArrowLink url={"/expenses"} />
            <span className={styles.heading1}>Weekly Distribution</span>
            <MonthPie data={data} />
          </div>
          <div className={styles.block4}>
            <ArrowLink url={"/history"} />
            <span className={styles.heading4}>Expenses</span>
            <List data={data} />
          </div>
          <div className={styles.block5}>
            <span className={styles.heading1}>Create Income</span>
            <CreateIncomeForm />
          </div>
          <div className={styles.block6}>
            <ArrowLink url={"/history"} />
            <span className={styles.heading1}>
              Monthly Distribution <span>Spent: ₹{totalSpentThisMonth}</span>
            </span>
            <MonthGraph data={data} />
          </div>
        </section>
      </main>
    </>
  );
}
