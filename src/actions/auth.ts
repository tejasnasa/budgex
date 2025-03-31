"use server";

import { loginSchema, signupSchema } from "@/utils/definitions";
import { prisma } from "@/utils/prisma";
import { createSession, deleteSession } from "@/utils/sessions";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { compare, hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";

export const signup = async function (values: z.infer<typeof signupSchema>) {
  const { username, email, password } = values;
  try {
    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    await createSession(newUser.id);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002" && Array.isArray(error.meta?.target)) {
        const targetField = error.meta.target[0];

        if (targetField === "username") {
          throw new Error(
            "Username already exists. Please choose a different one."
          );
        }

        if (targetField === "email") {
          throw new Error(
            "Email already exists. Please use a different email address."
          );
        }
      }

      console.error("Error during signup:", error);
      throw new Error("An unexpected error occurred. Please try again later.");
    }
  } finally {
    redirect("/dashboard");
  }
};

export const login = async (values: z.infer<typeof loginSchema>) => {
  const { email, password } = values;
  console.log(values);

  try {
    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      throw new Error("Email doesn't exist.");
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Invalid credentials.");
    }

    await createSession(user.id);

    redirect("/dashboard");
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message === "Email doesn't exist.") {
        throw new Error("Email or username doesn't exist. Please try again.");
      }

      if (error.message === "Invalid credentials.") {
        throw new Error("Invalid credentials. Please check your password.");
      }

      console.error("Error during login:", error);
      throw new Error("An unexpected error occurred. Please try again later.");
    }

    throw new Error("An unknown error occurred.");
  }
};

export const logout = async () => {
  deleteSession();
  redirect("/login");
};
