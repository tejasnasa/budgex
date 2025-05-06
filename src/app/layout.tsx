import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import TopLoader from "@/components/top-loader";
import Footer from "@/components/footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--quicksand",
});

export const metadata: Metadata = {
  title: "Budgex",
  description: "Personal financial tracker for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TopLoader />
      <body className={quicksand.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
