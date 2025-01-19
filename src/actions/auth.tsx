"use server";

import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import { formSchema } from "@/lib/definitions";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function signup(values: z.infer<typeof formSchema>) {
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

    console.log("New User:", newUser);

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
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
