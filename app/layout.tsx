import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codewords.vercel.app'),
  title: {
    default: 'CodeWords - CS & IT Dictionary',
    template: '%s | CodeWords'
  },
  description: 'Your comprehensive dictionary for computer science and IT terminology. Learn programming concepts, algorithms, and tech terms with clear definitions and examples.',
  keywords: ['computer science', 'programming', 'IT dictionary', 'coding terms', 'tech glossary', 'software development'],
  authors: [{ name: 'CodeWords' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codewords.vercel.app',
    title: 'CodeWords - CS & IT Dictionary',
    description: 'Your comprehensive dictionary for computer science and IT terminology',
    siteName: 'CodeWords',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeWords - CS & IT Dictionary',
    description: 'Your comprehensive dictionary for computer science and IT terminology',
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
