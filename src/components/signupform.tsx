"use client";

import { signupSchema } from "@/utils/definitions";
import { useState } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import styles from "./signupform.module.css";
import { Eye } from "lucide-react";

type SignupFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof signupSchema>>;
  form: UseFormReturn<z.infer<typeof signupSchema>>;
  responseError: string | null;
  setResponseError: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function SignupForm({
  form,
  onSubmit,
  responseError,
  setResponseError,
}: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = form;

  watch(() => {
    if (responseError) setResponseError(null);
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        className={styles.input}
        id="email"
        {...register("email")}
        placeholder="tejas@example.com"
      />
      <label htmlFor="username">Email</label>
      <input
        type="text"
        className={styles.input}
        id="username"
        {...register("username")}
        placeholder="tejasnasa"
      />
      <label htmlFor="password">Password</label>
      <input
        className={styles.input}
        id="password"
        {...register("password")}
        type={showPassword ? "text" : "password"}
      />
      <Eye
        onClick={() => setShowPassword((val) => !val)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
      />
      <button className={styles.submit}>Submit</button>
      <div>
        {errors.email ? (
          <p>{errors.email.message}</p>
        ) : errors.password ? (
          <p>{errors.password.message}</p>
        ) : responseError ? (
          <p>{responseError}</p>
        ) : null}
      </div>
    </form>
  );
}
