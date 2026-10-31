import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import ServicesPageContent from './ServicesPageContent';

export const metadata: Metadata = createPageMetadata({
  title: 'Our Services | Construction, Interior Fit Out & Development',
  description: 'Explore Buildora Projects\' full range of services: architecture & design, construction, interior fit-out, project management, smart automation, procurement, and facility management across Pakistan.',
  path: '/services',
  keywords: ['construction services Pakistan', 'interior fit out Pakistan', 'project management construction Pakistan', 'smart home automation Pakistan', 'building contractor services'],
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
