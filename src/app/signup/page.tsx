"use client";

import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/assets/images/logo.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "@/utils/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import SignupForm from "@/components/signupform";
import { signup } from "@/actions/auth";

export default function Signup() {
  const [responseError, setResponseError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: { email: "", password: "", username: "" },
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    try {
      if (!values.username || !values.email || !values.password) {
        throw new Error("All fields are required.");
      }

      await signup(values);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setResponseError(error.message);
      }
    }
  }

  return (
    <main className={styles.main}>
      <Image src={logo} alt="Budgex" height={56} className={styles.logo} />
      <section className={styles.box}>
        <h1 className={styles.heading}>Signup</h1>
        <SignupForm
          form={form}
          onSubmit={onSubmit}
          responseError={responseError}
          setResponseError={setResponseError}
        />
      </section>
    </main>
  );
}
