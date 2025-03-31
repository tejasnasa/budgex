"use client";

import styles from "@/components/header.module.css";
import { Bell, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo.png";
import Options from "@/components/options";
import { useState } from "react";

export default function Header({ name }: { name: string | undefined }) {
  const location = usePathname();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <header className={styles.header}>
      <Image src={logo} alt="Budgex" height={56} className={styles.logo} />
      <section>
        <div className={styles.navbar}>
          <Link
            href={"/dashboard"}
            className={
              location === "/dashboard" ? styles.navitem2 : styles.navitem1
            }
          >
            Dashboard
          </Link>
          <Link
            href={"/expenses"}
            className={
              location === "/expenses" ? styles.navitem2 : styles.navitem1
            }
          >
            Expenses
          </Link>
          <Link
            href={"/savings"}
            className={
              location === "/savings" ? styles.navitem2 : styles.navitem1
            }
          >
            Savings
          </Link>
          <Link
            href={"/history"}
            className={
              location === "/history" ? styles.navitem2 : styles.navitem1
            }
          >
            History
          </Link>
        </div>
        <div className={styles.icon}>
          <Bell size={19} />
        </div>
        <div>
          <button
            className={styles.icon}
            onClick={() => setShowOptions((val) => !val)}
          >
            <User size={19} />
          </button>
          <Options showOptions={showOptions} name={name} />
        </div>
      </section>
    </header>
  );
}
