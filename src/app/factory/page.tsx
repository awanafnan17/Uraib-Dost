import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import FactoryPageContent from './FactoryPageContent';

export const metadata: Metadata = createPageMetadata({
  title: 'Factory & Manufacturing | In-House Production',
  description: 'Explore Buildora Projects\' in-house manufacturing and fabrication facility in Lahore, serving clients across Pakistan. Custom furniture, joinery, metalwork, and construction components produced under strict quality controls.',
  path: '/factory',
  keywords: ['construction factory Pakistan', 'custom furniture manufacturing Pakistan', 'in-house fabrication construction'],
});

export default function FactoryPage() {
  return <FactoryPageContent />;
}
