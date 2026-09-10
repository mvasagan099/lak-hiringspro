import type { Metadata } from 'next';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact Us — ${BRAND.name} | Let's Start a Conversation`,
  description:
    "Whether you're looking for talent or your next opportunity, connect with Lords & Kings Manpower Solutions. Dedicated support for businesses and candidates.",
  openGraph: {
    title: `Contact Us — ${BRAND.name} | Let's Start a Conversation`,
    description:
      'Direct contact channels, hiring support inquiries, and candidate profile submissions for Lords & Kings Manpower Solutions.',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
