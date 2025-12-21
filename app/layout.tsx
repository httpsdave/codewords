import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://codewords.vercel.app'),
  title: {
    default: 'CodeWords - CS & IT Dictionary',
    template: '%s | CodeWords'
  },
  description: 'Your comprehensive dictionary for computer science and IT terminology. Learn programming concepts, algorithms, and tech terms with clear definitions and examples.',
  keywords: ['computer science', 'programming', 'IT dictionary', 'coding terms', 'tech glossary', 'software development'],
  authors: [{ name: 'CodeWords' }],
  alternates: {
    canonical: 'https://codewords.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codewords.vercel.app',
    title: 'CodeWords - CS & IT Dictionary',
    description: 'Your comprehensive dictionary for computer science and IT terminology',
    siteName: 'CodeWords',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'CodeWords - CS & IT Dictionary',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeWords - CS & IT Dictionary',
    description: 'Your comprehensive dictionary for computer science and IT terminology',
    images: ['/og-image.png'],
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 
                     focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
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
