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
    default: 'L&K HiringsPro | Workforce & Recruitment — Lords & Kings',
    template: '%s | L&K HiringsPro — Lords & Kings',
  },
  description:
    'L&K HiringsPro is a workforce and recruitment brand within the Lords & Kings ecosystem, connecting businesses with people and opportunities.',
  keywords: [
    'recruitment',
    'workforce solutions',
    'Lords and Kings',
    'Lords & Kings Group',
    'L&K HiringsPro',
    'bulk hiring',
    'skilled workforce',
    'enterprise staffing',
    'retail recruitment',
    'logistics staffing',
    'manufacturing workforce',
  ],
  authors: [{ name: 'L&K HiringsPro — A Lords & Kings Enterprise' }],
  metadataBase: new URL('https://lkhiringspro.com'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'L&K HiringsPro | Workforce & Recruitment — Lords & Kings',
    description:
      'L&K HiringsPro is a workforce and recruitment brand within the Lords & Kings ecosystem, connecting businesses with people and opportunities.',
    type: 'website',
    locale: 'en_US',
    siteName: 'L&K HiringsPro — Lords & Kings',
    url: 'https://lkhiringspro.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L&K HiringsPro | Workforce & Recruitment — Lords & Kings',
    description:
      'L&K HiringsPro is a workforce and recruitment brand within the Lords & Kings ecosystem, connecting businesses with people and opportunities.',
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
      <body className="bg-[#ffffff] text-[#111827] font-sans antialiased selection:bg-[#E31837]/15 selection:text-[#111827] relative">
        <GlobalBackground />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}


