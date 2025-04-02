import Header from "@/components/header";
import { prisma } from "@/utils/prisma";
import { decrypt } from "@/utils/sessions";
import { cookies } from "next/headers";
import styles from "./page.module.css";

export default async function History() {
  const cookie = (await cookies()).get("session")?.value;
  const session = (await decrypt(cookie)) as { userId?: string };

  const userData = await prisma.user.findUnique({
    select: {
      username: true,
    },
    where: {
      id: session.userId,
    },
  });

  return (
    <>
      <Header name={userData?.username} />
      <main className={styles.main}></main>
    </>
  );
}
