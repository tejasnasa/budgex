import { logout } from "@/actions/auth";
import styles from "./options.module.css";

export default function Options({
  showOptions,
  name,
}: {
  showOptions: boolean;
  name: string | undefined;
}) {
  return (
    <div className={showOptions ? styles.box : styles.hidden}>
      {name} <button onClick={logout} className={styles.button}>Logout</button>
    </div>
  );
}
