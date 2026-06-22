import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "JS Atlas — Learn Modern JavaScript",
    template: "%s | JS Atlas",
  },
  description:
    "A free, open-source platform for learning modern JavaScript from beginner to advanced level.",
  keywords: ["JavaScript", "JS", "learn", "tutorial", "programming", "web development"],
  authors: [{ name: "sahilweb6" }],
  creator: "sahilweb6",
  metadataBase: new URL("https://js-atlas.pages.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://js-atlas.pages.dev",
    siteName: "JS Atlas",
    title: "JS Atlas — Learn Modern JavaScript",
    description:
      "A free, open-source platform for learning modern JavaScript from beginner to advanced level.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JS Atlas — Learn Modern JavaScript",
    description:
      "A free, open-source platform for learning modern JavaScript from beginner to advanced level.",
    creator: "@sahilweb6",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}