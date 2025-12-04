import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
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
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorantGaramond.variable} ${sourceSans.variable} antialiased bg-forest text-sand`}>
        {/* Mobile Navigation */}
        <MobileNav />
        
        {/* Main Layout: Sticky Sidebar + Scrolling Content */}
        <div className="lg:flex lg:min-h-screen">
          {/* Left Sidebar - sticky on desktop */}
          <Sidebar />
          
          {/* Right Content Area - scrolls naturally */}
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

