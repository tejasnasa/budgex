"use server";

import { prisma } from "@/utils/prisma";
import { decrypt } from "@/utils/sessions";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createExpense(values: {
  name: string;
  amount: number;
  date: string;
  category: string;
}) {
  const cookie = (await cookies()).get("session")?.value;
  const session = (await decrypt(cookie)) as { userId?: string };

  if (!session?.userId) {
    throw new Error("Unauthorized: User not logged in");
  }

  const parsedDate = new Date(values.date);
  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format");
  }

  try {
    const categoryId = await prisma.category.findFirst({
      select: {
        id: true,
      },
      where: {
        name: values.category,
      },
    });

    if (!categoryId) {
      throw new Error("Category doesn't exist");
    }

    await prisma.expense.create({
      data: {
        name: values.name,
        amount: values.amount,
        date: parsedDate,
        userid: session?.userId,
        categoryid: categoryId.id,
      },
    });

    await prisma.user.update({
      where: { id: session.userId },
      data: {
        budget: {
          decrement: values.amount,
        },
      },
    });

    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Failed to create expense:", error);
    throw new Error("Error creating expense");
  }
}

export async function createIncome(values: {
  name: string;
  amount: number;
  date: string;
}) {
  const cookie = (await cookies()).get("session")?.value;
  const session = (await decrypt(cookie)) as { userId?: string };

  if (!session?.userId) {
    throw new Error("Unauthorized: User not logged in");
  }

  const parsedDate = new Date(values.date);
  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format");
  }

  try {
    await prisma.income.create({
      data: {
        source: values.name,
        amount: values.amount,
        userid: session.userId,
        date: parsedDate,
      },
    });

    await prisma.user.update({
      where: { id: session.userId },
      data: {
        budget: {
          increment: values.amount,
        },
      },
    });

    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Failed to create income:", error);
    throw new Error("Error creating income");
  }
}
