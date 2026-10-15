import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import { ThemeProvider } from "@/components/theme-provider";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolio.name} | Portfolio`,
  description: `The student portfolio of ${portfolio.name}, featuring projects, technical skills, certifications, and GitHub activity.`,
};

const themeBoot = `try{const c=localStorage.getItem('portfolio-theme')||'system';const t=c==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):c;document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeBoot }} /></head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
