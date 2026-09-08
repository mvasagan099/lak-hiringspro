import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Lords & Kings Group Manpower Solutions | Connecting People, Building Possibilities',
  description:
    'Lords & Kings Group Manpower Solutions is a workforce and recruitment brand from Lords and Kings, focused on connecting businesses with people and opportunities through human-centric principles.',
  openGraph: {
    title: 'About Us — Lords & Kings Group Manpower Solutions | Connecting People, Building Possibilities',
    description:
      'Lords & Kings Group Manpower Solutions is a workforce and recruitment brand from Lords and Kings, focused on connecting businesses with people and opportunities.',
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
