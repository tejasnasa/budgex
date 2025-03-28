import { formatDateTime } from "@/utils/datetime";
import styles from "./list.module.css";
import { Utensils } from "lucide-react";

interface ListProps {
  data: {
    name: string;
    id: string;
    userid: string;
    amount: number;
    date: Date;
    categoryid: string;
    created_at: Date;
    category: {
      name: string;
      id: string;
      created_at: Date;
      color: string | null;
    };
  }[];
}

export default function List({ data }: ListProps) {
  return (
    <>
      <div className={styles.whitediv}></div>
      <div className={styles.graydiv}></div>
      <div className={styles.list}>
        {data.map((expense) => (
          <div key={expense.id} className={styles.item}>
            <div className={styles.namebox}>
              <Utensils className={styles.icon} size={36} />
              <div>
                <div className={styles.name}>{expense.name}</div>
                <div className={styles.time}>
                  {formatDateTime(expense.created_at)}
                </div>
              </div>
            </div>
            <div className={styles.expense}>{expense.amount}</div>
          </div>
        ))}
        {data.map((expense) => (
          <div key={expense.id} className={styles.item}>
            <div className={styles.namebox}>
              <Utensils className={styles.icon} size={36} />
              <div>
                <div className={styles.name}>{expense.name}</div>
                <div className={styles.time}>
                  {formatDateTime(expense.created_at)}
                </div>
              </div>
            </div>
            <div className={styles.expense}>{expense.amount}</div>
          </div>
        ))}
      </div>
    </>
  );
}
