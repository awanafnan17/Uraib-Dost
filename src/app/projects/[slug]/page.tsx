import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS, BRAND } from '@/lib/constants';
import ProjectDetailContent from './ProjectDetailContent';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${project.category} Project`,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} | ${BRAND.name}`,
      description: project.description,
      type: 'article',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectDetailContent project={project} />;
}
