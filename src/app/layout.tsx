import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JS Atlas — Learn Modern JavaScript",
  description:
    "A free, open-source platform for learning modern JavaScript from beginner to advanced level.",
  keywords: ["JavaScript", "learn", "tutorial", "JS", "programming", "web development"],
  authors: [{ name: "JS Atlas" }],
  openGraph: {
    title: "JS Atlas — Learn Modern JavaScript",
    description:
      "A free, open-source platform for learning modern JavaScript from beginner to advanced level.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
