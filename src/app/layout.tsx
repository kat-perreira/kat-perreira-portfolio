import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "../styles/globals.scss";
import styles from "./layout.module.scss";
import { Sidebar, MobileNav } from "@/components";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kat Perreira | Senior Software Engineer",
  description: "Senior Software Engineer & Technical Storyteller. Building accessible, high-performance web experiences and mentoring engineers.",
  keywords: ["software engineer", "developer", "portfolio", "full-stack", "web development", "speaker"],
  authors: [{ name: "Kat Perreira" }],
  openGraph: {
    title: "Kat Perreira | Senior Software Engineer",
    description: "Senior Software Engineer & Technical Storyteller",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${sourceSans.variable} ${styles.body}`}>
        <MobileNav />
        <div className={styles.wrapper}>
          <Sidebar />
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
