import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import ProjectsPageContent from './ProjectsPageContent';

export const metadata: Metadata = createPageMetadata({
  title: 'Our Projects | Portfolio of Construction & Interior Work',
  description: 'Browse Buildora Projects\' portfolio of completed construction, interior fit-out, and development projects across Pakistan. Featuring D-Heights, Defence Raya Club, celebrity residences, and more.',
  path: '/projects',
  keywords: ['construction portfolio Pakistan', 'interior fit out projects Pakistan', 'Buildora completed projects'],
});

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
