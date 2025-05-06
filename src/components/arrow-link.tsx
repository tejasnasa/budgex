import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import styles from "./arrow-link.module.css";

export default function ArrowLink({ url }: { url: string }) {
  return (
    <Link href={url} className={styles.link}>
      <ArrowUpRight size={20}/>
    </Link>
  );
}
