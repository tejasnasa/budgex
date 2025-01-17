"use server";

import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";
import { FormState, SignupFormSchema } from "@/lib/definitions";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, email, password } = validatedFields.data;
  const hashedPassword = await hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  if (!newUser) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  await createSession(newUser.id);
  redirect("/profile");
}
