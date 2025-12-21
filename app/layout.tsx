import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import ErrorBoundary from '@/components/ErrorBoundary';
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CodeWords',
    description: 'Your comprehensive dictionary for computer science and IT terminology',
    url: 'https://codewords.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://codewords.vercel.app/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeToggle />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
