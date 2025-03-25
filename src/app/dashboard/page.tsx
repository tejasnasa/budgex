import styles from "@/app/dashboard/page.module.css";
import Header from "@/components/header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className={styles.main}></main>
    </>
  );
}
