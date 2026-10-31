'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import PremiumButton from '@/components/ui/PremiumButton';

const featured = PROJECTS.filter((p) => p.featured).slice(0, 6);

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="featured-projects" ref={ref} className="section-spacing bg-brand-charcoal relative overflow-hidden">
      <div className="absolute inset-0 arch-grid-fine opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading
          label="Buildora’s Portfolio"
          title="Buildora’s Projects"
          description="Building Excellence, Delivering Results. Each project represents our dedication to structural safety, meticulous finishing, and project timeline execution."
        />

        <div className="row g-4">
          {featured.map((project, i) => (
            <div key={project.slug} className="col-12 col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="h-100"
              >
                <Link href={`/projects/${project.slug}`} className="group block h-100">
                  <div className="project-card h-100 d-flex flex-column bg-brand-graphite" style={{ padding: 0, border: '1px solid rgba(255,255,255,0.06)' }}>
                    {/* Image wrapper */}
                    <div
                      className="project-image-wrapper"
                      style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '28px 28px 0 0' }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.scope} by Buildora`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.7), transparent)' }} />

                      {/* Category pill */}
                      <span
                        style={{
                          position: 'absolute', top: '16px', left: '16px',
                          padding: '6px 16px', fontSize: '10px', fontWeight: 600,
                          letterSpacing: '0.2em', textTransform: 'uppercase',
                          background: 'rgba(5,5,5,0.7)', backdropFilter: 'blur(12px)',
                          color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '999px', zIndex: 2,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3
                        className="font-heading text-brand-white group-hover:text-brand-silver transition-colors duration-300"
                        style={{ fontSize: '20px', letterSpacing: '0.06em', lineHeight: 1.2 }}
                      >
                        {project.title}
                      </h3>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', color: '#B5B5B5', fontSize: '13px' }}>
                        <svg style={{ width: '14px', height: '14px', flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"/></svg>
                        {project.location}
                      </div>

                      <p style={{ color: 'rgba(181,181,181,0.8)', fontSize: '14px', lineHeight: 1.65, marginTop: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
                        {project.description}
                      </p>

                      <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <span
                          className="group-hover:gap-3 transition-all duration-300"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFFFFF', fontWeight: 600 }}
                        >
                          View Project
                          <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ marginTop: '48px', display: 'flex', justifyContent: 'center' }}
        >
          <PremiumButton label="View All Projects" href="/projects" variant="secondary" />
        </motion.div>
      </div>
    </section>
  );
}
