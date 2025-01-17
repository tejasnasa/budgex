"use client";

import { useTheme } from "next-themes";
import styles from "@/components/theme-change.module.css";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme("light")} className={styles.but}>Light Mode</button>
      <button onClick={() => setTheme("dark")} className={styles.but}>Dark Mode</button>
      <button onClick={() => setTheme("pink")} className={styles.but}>Pink Mode</button>
    </div>
  );
};
