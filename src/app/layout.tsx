import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ASHAIVA — Architecture of Intelligent Systems',
  description: 'ASHAIVA designs intelligent automation systems and digital experiences that make businesses simpler, faster, and easier to operate.',
  keywords: [
    'ASHAIVA',
    'AI Automation Studio',
    'Intelligent Systems',
    'Digital Systems Architecture',
    'Custom Digital Experiences',
    'Farhan Khan',
    'Mohit Agarwal'
  ],
  authors: [
    { name: 'Farhan Khan' },
    { name: 'Mohit Agarwal' }
  ],
  metadataBase: new URL('https://ashaiva.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ASHAIVA — Architecture of Intelligent Systems',
    description: 'ASHAIVA designs intelligent automation systems and digital experiences that make businesses simpler, faster, and easier to operate.',
    url: 'https://ashaiva.com',
    siteName: 'ASHAIVA',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASHAIVA — Architecture of Intelligent Systems',
    description: 'ASHAIVA designs intelligent automation systems and digital experiences that make businesses simpler, faster, and easier to operate.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ASHAIVA',
  url: 'https://ashaiva.com',
  description: 'ASHAIVA designs intelligent automation systems and digital experiences that make businesses simpler, faster, and easier to operate.',
  founders: [
    {
      '@type': 'Person',
      name: 'Farhan Khan',
      jobTitle: 'Co-Founder · Lead'
    },
    {
      '@type': 'Person',
      name: 'Mohit Agarwal',
      jobTitle: 'Co-Founder · Lead'
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Italiana&family=JetBrains+Mono:wght@300;400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#07090d] text-[#f5f3ee] antialiased selection:bg-[#c8a97e]/25 selection:text-[#fbf9f5]">
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
