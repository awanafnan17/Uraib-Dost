import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import AboutPageContent from './AboutPageContent';

export const metadata: Metadata = createPageMetadata({
  title: 'About Buildora Projects | Company Profile',
  description: 'Learn about Buildora Projects, a leading construction, development, and interior execution company based in Lahore, serving clients across Pakistan. Our mission, vision, and core values.',
  path: '/about',
  keywords: ['about Buildora Projects', 'construction company profile Pakistan', 'building contractor history Pakistan'],
});

export default function AboutPage() {
  return <AboutPageContent />;
}
