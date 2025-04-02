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

export default function Login() {
  const [responseError, setResponseError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      if (!values.email || !values.password) {
        throw new Error("All fields are required.");
      }

      await login(values);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setResponseError(error.message);
      }
    }
  };

  return (
    <main className={styles.main}>
      <Link href="/">
        <Image src={logo} alt="Budgex" height={56} className={styles.logo} />
      </Link>

      <section className={styles.box}>
        <h1 className={styles.heading}>Login</h1>
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
