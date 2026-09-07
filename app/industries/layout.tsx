import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries — L&K HiringsPro | Cross-Sector Workforce Solutions',
  description:
    'People power every industry. Explore workforce solutions across Retail, Logistics, Manufacturing, Hospitality, E-commerce, Sales & Support, and Technical & IT with L&K HiringsPro.',
  openGraph: {
    title: 'Industries — L&K HiringsPro | Cross-Sector Workforce Solutions',
    description:
      'Connecting businesses with dependable workforce solutions across a range of key commercial sectors.',
    type: 'website',
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
