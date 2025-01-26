"use client";

import Image from "next/image";
import comingsoon from "@/assets/comingsoon.png";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <main className="h-dvh w-dvw flex font-(--font-geist-sans)">
      <Image
        src={comingsoon}
        alt="Coming Soon"
        className="-z-10 absolute blur-md"
      />
      <section className="text-[120px] text-white font-Geist z-50 border-[#030303] h-dvh w-dvw border-[20px] bg-black/50 flex items-center justify-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-[130px] font-mono">COMING SOON</p>
          <p className="text-[20px] font-mono">Stay Tuned</p>
        </motion.div>
      </section>
    </main>
  );
}
