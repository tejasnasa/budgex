import { logout } from "@/actions/auth";
import styles from "./options.module.css";
import { useTheme } from "next-themes";

export default function Options({
  showOptions,
  name,
}: {
  showOptions: boolean;
  name: string | undefined;
}) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={showOptions ? styles.box : styles.hidden}>
      {name}{" "}
      <button onClick={toggleTheme} className={styles.button}>
        Change Theme
      </button>
      <button onClick={logout} className={styles.button}>
        Logout
      </button>
    </div>
  );
}
