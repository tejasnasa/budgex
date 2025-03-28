import styles from "./create-income-form.module.css";

export default function CreateIncomeForm() {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Add Income</h4>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Name" />
        <input className={styles.input} type="number" placeholder="Amount" />
        <input className={styles.input} type="date" />
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
}
