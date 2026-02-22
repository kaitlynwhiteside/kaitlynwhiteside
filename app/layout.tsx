import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});


export const metadata: Metadata = {
  title: "Kaitlyn Whiteside — Attorney & Writer",
  description:
    "Kaitlyn Whiteside is an attorney and writer based in New York, licensed in New York, Georgia, and Tennessee.",
  openGraph: {
    title: "Kaitlyn Whiteside — Attorney & Writer",
    description:
      "Kaitlyn Whiteside is an attorney and writer based in New York, licensed in New York, Georgia, and Tennessee.",
    url: "https://kaitlynwhiteside.com",
    siteName: "Kaitlyn Whiteside",
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
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
