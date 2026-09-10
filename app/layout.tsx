import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import GlobalBackground from '@/components/GlobalBackground';
import { BRAND } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Lords & Kings Manpower Solutions | Workforce & Recruitment',
    template: '%s | Lords & Kings Manpower Solutions',
  },
  description:
    'Lords & Kings Manpower Solutions is a workforce and recruitment brand within the Lords & Kings ecosystem, connecting businesses with people and opportunities.',
  keywords: [
    'recruitment',
    'workforce solutions',
    'manpower solutions',
    'Lords and Kings',
    'Lords & Kings Group',
    'Lords & Kings Manpower Solutions',
    'bulk hiring',
    'skilled workforce',
    'enterprise staffing',
    'retail recruitment',
    'logistics staffing',
    'manufacturing workforce',
  ],
  authors: [{ name: 'Lords & Kings Manpower Solutions — A Lords & Kings Enterprise' }],
  metadataBase: new URL('https://lkhiringspro.com'),
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Lords & Kings Manpower Solutions | Workforce & Recruitment',
    description:
      'Lords & Kings Manpower Solutions is a workforce and recruitment brand within the Lords & Kings ecosystem, connecting businesses with people and opportunities.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Lords & Kings Manpower Solutions',
    url: 'https://lkhiringspro.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lords & Kings Manpower Solutions | Workforce & Recruitment',
    description:
      'Lords & Kings Manpower Solutions is a workforce and recruitment brand within the Lords & Kings ecosystem, connecting businesses with people and opportunities.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caacupe+One&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="bg-[#ffffff] text-[#111827] font-sans antialiased selection:bg-[#E31837]/15 selection:text-[#111827] relative">
        <GlobalBackground />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}


