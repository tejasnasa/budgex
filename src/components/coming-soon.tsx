import Link from "next/link";
import styles from "./coming-soon.module.css";

export default function ComingSoon() {
  return <section className={styles.section}>Coming Soon!
  <Link href="/dashboard" className={styles.link}>Go to Dashboard</Link></section>;
}
