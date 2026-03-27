import { loginSchema } from "@/utils/definitions";
import styles from "./loginform.module.css";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";

type LoginFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof loginSchema>>;
  form: UseFormReturn<z.infer<typeof loginSchema>>;
  responseError: string | null;
  setResponseError: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function LoginForm({
  form,
  onSubmit,
  responseError,
  setResponseError,
}: LoginFormProps) {
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
