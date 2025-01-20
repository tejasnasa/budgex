"use server";

import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import { loginFormSchema, signupFormSchema } from "@/lib/definitions";
import { compare, hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";

export const signup = async (values: z.infer<typeof signupFormSchema>) => {
  const { username, email, password } = values;
  let redirectPath: string | null = null;
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
    redirectPath = "/dashboard";
  } catch (error: any) {
    if (error.code === "P2002" && error.meta?.target?.includes("username")) {
      throw new Error(
        "Username already exists. Please choose a different one."
      );
    }

    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      throw new Error(
        "Email already exists. Please use a different email address."
      );
    }

    console.error("Error during signup:", error);
    throw new Error("An unexpected error occurred. Please try again later.");
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
};

export const login = async (values: z.infer<typeof loginFormSchema>) => {
  const { usernameOrEmail, password } = values;
  let redirectPath: string | null = null;

  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      },
    });

    if (!user) {
      throw new Error("Email or username doesn't exist.");
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Invalid credentials.");
    }

    await createSession(user.id);
    redirectPath = "/dashboard";
  } catch (error: any) {
    if (error.message === "Email or username doesn't exist.") {
      throw new Error("Email or username doesn't exist. Please try again.");
    }

    if (error.message === "Invalid credentials.") {
      throw new Error("Invalid credentials. Please check your password.");
    }

    console.error("Error during login:", error);
    throw new Error("An unexpected error occurred. Please try again later.");
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
};

export const logout = async () => {
  deleteSession();
  redirect("/login");
};
