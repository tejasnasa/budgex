import styles from "./create-expense-form.module.css";

export default function CreateExpenseForm() {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Create Expense</h4>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Name" />
        <input className={styles.input} type="number" placeholder="Amount" />
        <input className={styles.input} type="date" />
        <select name="" id="" className={styles.input}>
          <option value="">Miscellanous</option>
          <option value="">Food</option>
          <option value="">Transport</option>
          <option value="">Movies</option>
        </select>
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
}
