import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import TopLoader from "@/components/top-loader";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

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
        <ThemeProvider>
          <div className="mainbody1" data-hide-on-theme="dark">
            {children}
            <Footer />
          </div>
          <div className="mainbody2" data-hide-on-theme="light">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
