import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Employers — Lords & Kings Group Manpower Solutions | Precision Workforce Solutions',
  description:
    'Build the team that moves your business forward. Connect with dependable talent across retail, logistics, manufacturing, hospitality, sales, and IT.',
  openGraph: {
    title: 'For Employers — Lords & Kings Group Manpower Solutions | Precision Workforce Solutions',
    description:
      'Tell us what you need. We connect growing businesses with pre-screened, dependable workforce talent.',
    type: 'website',
  },
};

export default function EmployersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
