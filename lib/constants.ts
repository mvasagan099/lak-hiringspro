/**
 * Centralized Brand and Company Configuration for Lords & Kings Manpower Solutions
 * A workforce and recruitment brand of Lords and Kings.
 *
 * Update these constants to change contact information, URLs,
 * and social channels across the entire website in one place.
 */

export const BRAND = {
  name: 'Lords & Kings Manpower Solutions',
  shortName: 'Manpower Solutions',
  parentCompany: 'Lords & Kings Group',
  parentSiteUrl: 'https://lordsandkings.co',
  divisionNumber: '5th Division',
  divisionName: 'Workforce & Recruitment',
  legalEntity: 'Lords & Kings Manpower Solutions (A Lords & Kings Enterprise)',
  headline: 'People are the foundation of every great business.',
  statement: 'The right people create stronger businesses.',
  tagline: 'Connecting businesses with people, and people with opportunity.',
  description:
    'Lords & Kings Manpower Solutions is the 5th division within the Lords & Kings Group ecosystem, connecting businesses with dependable workforce and talent opportunities.',
  metaTitle: 'Lords & Kings Manpower Solutions | 5th Division — Workforce & Recruitment',
  siteUrl: 'https://lkhiringspro.com',
} as const;

export const GROUP_DIVISIONS = [
  {
    num: '01',
    name: 'Lords And Kings Enterprises',
    category: 'Proprietorship · Est. 2018',
    tag: 'PROPRIETORSHIP · EST. 2018',
    desc: 'Trusted suppliers of fresh fruits and vegetables, serving customers across the region through a reliable distribution network.',
    url: 'https://lordsandkings.co',
    isCurrent: false,
  },
  {
    num: '02',
    name: 'Lords & Kings Enterprises Pvt Ltd',
    category: 'Technology & Corporate Investment',
    tag: 'TECHNOLOGY & CORPORATE INVESTMENT',
    desc: 'Driving enterprise innovation through strategic investments, software solutions, and digital transformation initiatives.',
    url: 'https://lordsandkings.co',
    isCurrent: false,
  },
  {
    num: '03',
    name: 'Lords and Kings Agro Pvt Ltd',
    category: 'Agricultural Distribution',
    tag: 'AGRICULTURAL DISTRIBUTION',
    desc: "Group's retail arm delivering fresh produce, groceries, and agricultural commodities through its brands Convino Mart, Chikpuk, and Ayra Foods.",
    url: 'https://lordsandkingsagro.com',
    isCurrent: false,
  },
  {
    num: '04',
    name: 'Lords & Kings Estates LLP',
    category: 'Real Estate & Land Investment',
    tag: 'REAL ESTATE & LAND INVESTMENT',
    desc: "A real estate venture focused on land sourcing, property transactions, and investment opportunities, supporting the Group's long-term diversification strategy.",
    url: 'https://lordsandkings.co',
    isCurrent: false,
  },
  {
    num: '05',
    name: 'Lords & Kings Manpower Solutions',
    category: 'Workforce & Recruitment',
    tag: '5TH DIVISION · WORKFORCE & RECRUITMENT',
    desc: 'Specialized workforce deployment and recruitment arm connecting enterprises with dependable operational, frontline, and technical personnel.',
    url: 'https://lkhiringspro.com',
    isCurrent: true,
  },
] as const;

export const CONTACT_INFO = {
  email: 'hello@lordsandkingsagro.com',
  recruitmentEmail: 'hello@lordsandkingsagro.com',
  phone: '+91 89255 13218',
  phoneRaw: '+918925513218',
  whatsappNumber: '+918925513218',
  whatsappUrl: 'https://wa.me/918925513218?text=Hello%20Lords%20%26%20Kings%20Manpower%20Solutions,%20I%20would%20like%20to%20inquire%20about%20workforce%20solutions',
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
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

