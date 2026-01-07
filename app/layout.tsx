import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prasidh P Shetty | Web Designing Project 1",
  description: "I am Prasidh P Shetty, a Web Designer and Full-Stack Developer passionate about building modern, visually engaging, and user-focused digital experiences.",
  keywords: ["Web Developer", "Full-Stack Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Prasidh P Shetty" }],
  openGraph: {
    title: "Prasidh P Shetty | Web Designing Project 1",
    description: "I am Prasidh P Shetty, a Web Designer and Full-Stack Developer passionate about building modern, visually engaging, and user-focused digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white antialiased transition-colors duration-300`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
