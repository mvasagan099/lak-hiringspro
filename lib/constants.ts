/**
 * Centralized Brand and Company Configuration for Lords & Kings Group Manpower Solutions
 * A workforce and recruitment brand of Lords and Kings.
 *
 * Update these constants to change contact information, URLs,
 * and social channels across the entire website in one place.
 */

export const BRAND = {
  name: 'Lords & Kings Group Manpower Solutions',
  shortName: 'Manpower Solutions',
  parentCompany: 'Lords & Kings Group',
  parentSiteUrl: 'https://lordsandkings.co',
  divisionName: 'Workforce & Recruitment',
  legalEntity: 'Lords & Kings Group Manpower Solutions (A Lords & Kings Enterprise)',
  headline: 'People are the foundation of every great business.',
  statement: 'The right people create stronger businesses.',
  tagline: 'Connecting businesses with people, and people with opportunity.',
  description:
    'Lords & Kings Group Manpower Solutions is a workforce and recruitment brand within the Lords & Kings ecosystem, connecting businesses with people and opportunities.',
  metaTitle: 'Lords & Kings Group Manpower Solutions | Workforce & Recruitment — Lords & Kings',
  siteUrl: 'https://lkhiringspro.com',
} as const;

export const CONTACT_INFO = {
  email: 'michael@lordsandkings.co',
  recruitmentEmail: 'michael@lordsandkings.co',
  phone: '+91 80725 57159',
  phoneRaw: '+918072557159',
  whatsappNumber: '+918072557159',
  whatsappUrl: 'https://wa.me/918072557159?text=Hello%20Lords%20%26%20Kings%20Group%20Manpower%20Solutions,%20I%20would%20like%20to%20inquire%20about%20workforce%20solutions',
  officeLocation: '328, 2nd floor, Ten Square Mall, Jawaharlal Nehru Road, Koyambedu, Chennai, Tamil Nadu - 600107',
  address: {
    line1: '328, 2nd floor, Ten Square Mall,',
    line2: 'Jawaharlal Nehru Road, Koyambedu,',
    cityStateZip: 'Chennai, Tamil Nadu - 600107',
    full: '328, 2nd floor, Ten Square Mall, Jawaharlal Nehru Road, Koyambedu, Chennai, Tamil Nadu - 600107',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ten+Square+Mall+Koyambedu+Chennai+600107',
  },
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
