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
  description: 'Full Stack Developer dedicated to crafting unique user experiences from initial wireframes to final products that make a global impact.',
  openGraph: {
    siteName: 'Manuel Reyes',
    title: 'Manuel Reyes',
    url: 'http://www.manuelreyes.dev',
    type: 'website',
    description: 'Manuel Reyes is a Full Stack Developer dedicated to crafting unique user experiences from initial wireframes to final products that make a global impact.',
    locale: 'en_US',
    images: 'http://www.manuelreyes.dev/image.jpg'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yoggsoft',
    title: 'Manuel Reyes - Software Engineer located in Brussels',
    description: 'Software Engineer located in Brussels.',
    creator: '@yoggsoft',
    images: 'http://www.manuelreyes.dev/image.jpg'
  }
};

const jsonLd = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  'name': 'Manuel Reyes',
  'url': 'http://www.manuelreyes.dev',
  'disambiguatingDescription': 'Venezuelan Software developer',
  'nationality': 'Spain, Venezuelan',
  'sameAs': [
    'https://twitter.com/koopaquerales',
    'https://linkedin.com/in/querales',
    'https://www.facebook.com/queralito',
    'https://www.soundcloud.com/koopaquerales',
    'https://www.instagram.com/koopaquerales/?hl=en'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <meta name="url" content="http://www.manuelreyes.dev" />
        <meta itemProp="url" content="http://www.manuelreyes.dev" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen bg-background font-sans antialiased `}
      > 
        {children}
      </body>
    </html>
  );
}
