import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

export default function Register() {
  return (
    <main className={styles.main}>
      <Image src={logo} alt="Budgex" height={56} className={styles.logo} />
      <section>
        <h1>Login</h1>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Submit</button>
          <Link href="/register">Signup</Link>
        </form>
      </section>
    </main>
  );
}
