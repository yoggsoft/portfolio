import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Manuel Reyes - Portfolio',
  description: 'Software Engineer located in Brussels.',
  openGraph: {
    siteName: 'Manuel Reyes',
    title: 'Manuel Reyes',
    url: 'http://www.manuelreyes.dev',
    type: 'website',
    description: 'Software Engineer located in Brussels.',
    locale: 'en_US',
    images: 'http://www.manuelreyes.dev/img/opengraph-image.jpg'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yoggsoft',
    title: 'Manuel Reyes - Software Engineer located in Brussels',
    description: 'Software Engineer located in Brussels.',
    creator: '@yoggsoft',
    images: 'http://www.manuelreyes.dev/img/opengraph-image.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen bg-background font-sans antialiased `}
      > 
        {children}
      </body>
    </html>
  );
}
