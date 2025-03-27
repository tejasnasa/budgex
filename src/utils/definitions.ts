import { z } from "zod";

export const signupSchema = z.object({
  fullname: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long." }),
  email: z.string().email({ message: "Enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    })
    .trim(),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email." }).trim(),
  password: z.string().min(8, { message: "Enter a valid password" }).trim(),
});
