"use client";

import { useForm } from "react-hook-form";
import styles from "./create-expense-form.module.css";
import { createExpense } from "@/actions/create";

type FormData = {
  name: string;
  amount: number;
  date: string;
  category: string;
};

export default function CreateExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await createExpense(data);
    reset();
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Create Expense</h4>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          required
          {...register("name")}
        />

        <input
          className={styles.input}
          type="number"
          placeholder="Amount"
          {...register("amount", {
            valueAsNumber: true,
          })}
        />

        <input className={styles.input} type="date" {...register("date")} />

        <select className={styles.input} {...register("category")}>
          <option value="Misc">Miscellanous</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Movies">Movies</option>
        </select>

        <button className={styles.button} type="submit">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
