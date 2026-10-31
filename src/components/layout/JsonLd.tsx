'use client';

import { BRAND, FAQ_ITEMS, SERVICES } from '@/lib/constants';

const schemas = [
  // Organization
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    description: BRAND.description,
    url: 'https://buildoraprojects.com',
    email: BRAND.email,
    telephone: BRAND.phone[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3rd Floor, Plaza 185/6 MB, Phase 6',
      addressLocality: 'DHA Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    sameAs: [],
  },
  // LocalBusiness
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://buildoraprojects.com/#business',
    name: BRAND.name,
    description: BRAND.description,
    url: 'https://buildoraprojects.com',
    email: BRAND.email,
    telephone: BRAND.phone[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3rd Floor, Plaza 185/6 MB, Phase 6',
      addressLocality: 'DHA Lahore',
      addressRegion: 'Punjab',
      postalCode: '54000',
      addressCountry: 'PK',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 31.47, longitude: 74.4 },
    openingHours: 'Mo-Sa 09:00-18:00',
    priceRange: '$$$$',
    image: 'https://buildoraprojects.com/images/og-image.jpg',
    areaServed: { '@type': 'City', name: 'Lahore' },
  },
  // Service
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Construction & Interior Execution',
    provider: { '@type': 'Organization', name: BRAND.name },
    areaServed: { '@type': 'City', name: 'Lahore' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Buildora Services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.description },
      })),
    },
  },
  // FAQPage
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  },
  // BreadcrumbList
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildoraprojects.com' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://buildoraprojects.com/about' },
      { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://buildoraprojects.com/services' },
      { '@type': 'ListItem', position: 4, name: 'Projects', item: 'https://buildoraprojects.com/projects' },
      { '@type': 'ListItem', position: 5, name: 'Factory', item: 'https://buildoraprojects.com/factory' },
      { '@type': 'ListItem', position: 6, name: 'Contact', item: 'https://buildoraprojects.com/contact' },
    ],
  },
];

export default function JsonLd() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
