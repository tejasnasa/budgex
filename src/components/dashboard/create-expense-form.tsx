"use client";

import { useForm } from "react-hook-form";
import styles from "./create-expense-form.module.css";
import { createExpense } from "@/actions/create";
import { ExpenseFormData } from "@/utils/types";

export default function CreateExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ExpenseFormData>();

  const onSubmit = async (data: ExpenseFormData) => {
    await createExpense(data);
    reset();
  };

  return (
    <div className={styles.container}>
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
          <option value="Misc" className={styles.option}>
            Miscellanous
          </option>
          <option value="Food" className={styles.option}>
            Food
          </option>
          <option value="Transport" className={styles.option}>
            Transport
          </option>
          <option value="Movies" className={styles.option}>
            Movies
          </option>
        </select>

        <button className={styles.button} type="submit">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
