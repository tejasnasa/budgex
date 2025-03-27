import { loginSchema } from "@/utils/definitions";
import styles from "./loginform.module.css";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { Eye } from "lucide-react";

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
      <label htmlFor="email">Email</label>
      <input
        type="text"
        className={styles.input}
        id="email"
        {...register("email")}
        placeholder="tejas@example.com"
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
