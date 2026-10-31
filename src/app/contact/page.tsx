import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Us | Book a Consultation',
  description: 'Get in touch with Buildora Projects for premium construction, interior fit-out, and development services across Pakistan. Request a free consultation today.',
  path: '/contact',
  keywords: ['contact Buildora', 'construction consultation Pakistan', 'interior fit out quote', 'book appointment construction'],
});

export default function ContactPage() {
  return <ContactPageContent />;
}
