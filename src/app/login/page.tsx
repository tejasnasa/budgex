"use client";

import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/utils/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginForm from "@/components/loginform";
import { login } from "@/actions/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Login() {
  const [responseError, setResponseError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    await login(values);

    redirect("/dashboard");
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/">
          <Image src={logo} alt="Budgex" height={48} width={48} className={styles.logo} />
        </Link>
      </header>

      <section className={styles.box}>
        <h1 className={styles.heading}>Welcome <span className={styles.highlight}>Back</span></h1>
        <LoginForm
          form={form}
          onSubmit={onSubmit}
          responseError={responseError}
          setResponseError={setResponseError}
        />
      </section>
    </main>
  );
}
