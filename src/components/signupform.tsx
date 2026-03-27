"use client";

import { signupSchema } from "@/utils/definitions";
import { useState } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import styles from "./signupform.module.css";
import { Eye, EyeOff } from "lucide-react";

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
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          className={styles.input}
          id="email"
          {...register("email")}
          placeholder="tejas@example.com"
        />
        {errors.email && <div className={styles.fieldError}>{errors.email.message}</div>}
      </div>

      <div className={styles.field}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          type="text"
          className={styles.input}
          id="username"
          {...register("username")}
          placeholder="tejasnasa"
        />
        {errors.username && <div className={styles.fieldError}>{errors.username.message}</div>}
      </div>

      <div className={styles.field}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <div className={styles.password}>
          <input
            className={styles.input}
            id="password"
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
          />
          <button 
            type="button" 
            className={styles.eyeBtn}
            onClick={() => setShowPassword((val) => !val)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && <div className={styles.fieldError}>{errors.password.message}</div>}
      </div>

      <button className={styles.submit}>Submit</button>

      {responseError && (
        <div className={styles.error}>
          <p>{responseError}</p>
        </div>
      )}
    </form>
  );
}
