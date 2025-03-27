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

export default function Login() {
  const [responseError, setResponseError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (/*values: z.infer<typeof loginSchema>*/) => {
    // mutate(values);
  };

  return (
    <main className={styles.main}>
      <Image src={logo} alt="Budgex" height={56} className={styles.logo} />
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
