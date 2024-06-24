import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import localFont from "next/font/local"
import { AOSInit } from "@/components/providers/aos-provider";

const MinecraftFont = localFont({ src: '/minecraft.ttf' })

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A recoded version of my pokedexjs to typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={MinecraftFont.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
