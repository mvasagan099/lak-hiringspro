/**
 * Centralized Brand and Company Configuration for L&K HiringsPro
 * A workforce and recruitment brand of Lords and Kings.
 *
 * Update these constants to change contact information, URLs,
 * and social channels across the entire website in one place.
 */

export const BRAND = {
  name: 'L&K HiringsPro',
  shortName: 'HiringsPro',
  parentCompany: 'Lords & Kings Group',
  parentSiteUrl: 'https://lordsandkings.co',
  divisionName: 'Workforce & Recruitment',
  legalEntity: 'L&K HiringsPro (A Lords & Kings Enterprise)',
  headline: 'People are the foundation of every great business.',
  statement: 'The right people create stronger businesses.',
  tagline: 'Connecting businesses with people, and people with opportunity.',
  description:
    'L&K HiringsPro is a workforce and recruitment brand within the Lords & Kings ecosystem, connecting businesses with people and opportunities.',
  metaTitle: 'L&K HiringsPro | Workforce & Recruitment — Lords & Kings',
  siteUrl: 'https://lkhiringspro.com',
} as const;

export const CONTACT_INFO = {
  email: 'contact@lordsandkings.co',
  recruitmentEmail: 'hiringspro@lordsandkings.co',
  phone: '+91 80725 57159',
  phoneRaw: '+918072557159',
  whatsappNumber: '+918072557159',
  whatsappUrl: 'https://wa.me/918072557159?text=Hello%20L%26K%20HiringsPro,%20I%20would%20like%20to%20inquire%20about%20workforce%20solutions',
  officeLocation: 'Lords & Kings Corporate HQ, Operations & Workforce Division',
  hours: 'Mon – Sat, 9:00 AM – 7:00 PM IST',
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/lk-hiringspro',
  instagram: 'https://www.instagram.com/lkhiringspro',
  twitter: 'https://x.com/lkhiringspro',
} as const;

export const EXTERNAL_FORMS = {
  // Placeholder Google Form / Application intake links if external redirects are desired
  employerIntakeForm: 'https://forms.google.com/lkhiringspro-employer-intake',
  candidateRegistrationForm: 'https://forms.google.com/lkhiringspro-candidate-registration',
} as const;

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Employers', href: '/employers' },
  { name: 'Candidates', href: '/candidates' },
  { name: 'Industries', href: '/industries' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;
