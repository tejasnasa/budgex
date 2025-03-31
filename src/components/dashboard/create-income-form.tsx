"use client";

import { IncomeFormData } from "@/utils/types";
import styles from "./create-income-form.module.css";
import { useForm } from "react-hook-form";
import { createIncome } from "@/actions/create";

export default function CreateIncomeForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<IncomeFormData>();

  const onSubmit = async (data: IncomeFormData) => {
    await createIncome(data);
    reset();
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Add Income</h4>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
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
        <button className={styles.button} type="submit">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
