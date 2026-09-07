import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Candidates — L&K HiringsPro | Discover Verified Opportunities',
  description:
    'Your next opportunity starts here. Discover verified career openings across retail, logistics, manufacturing, hospitality, customer support, and IT with L&K HiringsPro. 100% free for job seekers.',
  openGraph: {
    title: 'For Candidates — L&K HiringsPro | Discover Verified Opportunities',
    description:
      'Connect with verified corporate employers. No candidate fees, transparent role expectations, and direct interview pipelines.',
    type: 'website',
  },
};

export default function CandidatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
