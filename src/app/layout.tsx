import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ASHAIVA AUTOMATION — AI Automation Systems for Modern Businesses',
  description: 'ASHAIVA AUTOMATION designs intelligent AI-powered workflows that connect leads, communication, operations, documents, and business processes into one unified system.',
  keywords: [
    'AI Automation',
    'Workflow Engineering',
    'Speed to Lead',
    'CRM Automation',
    'Document Extraction',
    'Custom AI Agents',
    'ASHAIVA',
    'Enterprise Automation Systems'
  ],
  authors: [{ name: 'ASHAIVA AUTOMATION' }],
  metadataBase: new URL('https://ashaiva.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ASHAIVA AUTOMATION — AI Automation Systems for Modern Businesses',
    description: 'Transform enterprise chaos into connected, intelligent automated systems. Zero dropped leads, instantaneous responses, automated operations.',
    url: 'https://ashaiva.com',
    siteName: 'ASHAIVA AUTOMATION',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASHAIVA AUTOMATION — AI Automation Systems for Modern Businesses',
    description: 'ASHAIVA AUTOMATION designs intelligent AI-powered workflows that automate leads, communication, operations, documents and business processes.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ASHAIVA AUTOMATION',
  url: 'https://ashaiva.com',
  logo: 'https://ashaiva.com/logo.png',
  description: 'ASHAIVA AUTOMATION builds intelligent AI-powered workflows that automate leads, communication, operations, documents and business processes.',
  sameAs: [
    'https://twitter.com/ashaiva',
    'https://linkedin.com/company/ashaiva'
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    serviceType: 'AI Workflow Engineering and Enterprise Automation'
  }
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
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-obsidian-950 text-slate-100 antialiased selection:bg-teal-500/30 selection:text-teal-200">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
