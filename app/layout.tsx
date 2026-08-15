import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookmark & Bind — Book Information, Guidance & Collections",
  description:
    "Explore book topics, reading resources and recommendations for students, readers and institutions. Enquire instantly on WhatsApp — no shopping cart, just guidance.",
  keywords: [
    "book recommendations",
    "educational books",
    "competitive exam books",
    "children's books",
    "book guidance",
    "reading resources",
  ],
  openGraph: {
    title: "Bookmark & Bind — Book Information, Guidance & Collections",
    description:
      "A premium digital library of book topics and guidance. Enquire on WhatsApp for any book-related question.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body bg-sandal text-brown antialiased">
        {children}
      </body>
    </html>
  );
}
