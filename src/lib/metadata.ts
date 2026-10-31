import type { Metadata } from 'next';
import { BRAND } from './constants';

const BASE_URL = 'https://buildoraprojects.com';

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${BRAND.name} | ${BRAND.tagline} | Premium Construction, Interior Fit-Out & Project Management Pakistan`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: [
    'construction company Pakistan',
    'construction company Lahore',
    'builders in Pakistan',
    'interior fit-out company Pakistan',
    'project management construction Pakistan',
    'commercial construction Pakistan',
    'residential construction Pakistan',
    'builders Lahore',
    'interior contractors Pakistan',
    'luxury interiors Pakistan',
    'construction services Pakistan',
    'Buildora Projects',
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: BRAND.name,
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: `${BRAND.name} | ${BRAND.tagline}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: '/' },
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...(siteMetadata.keywords as string[] || []), ...keywords],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${BRAND.name}`,
      description,
      url: `${BASE_URL}${path}`,
      siteName: BRAND.name,
      type: 'website',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${BRAND.name}`,
      description,
    },
  };
}
