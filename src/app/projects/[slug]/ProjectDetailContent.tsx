'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PremiumButton from '@/components/ui/PremiumButton';
import { PROJECTS } from '@/lib/constants';

type Project = (typeof PROJECTS)[number];

export default function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <div>
      {/* Hero */}
      <section className="navbar-clearance section-spacing relative overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-20" />
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-brand-muted mb-8"
          >
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-brand-gold transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-brand-cream">{project.title}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase text-brand-gold bg-brand-gold/[0.06] border border-brand-gold/20 rounded-full mb-5"
              >
                {project.category}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-display text-brand-white"
              >
                {project.title.toUpperCase()}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-brand-muted text-body-lg leading-[1.8]"
              >
                {project.description}
              </motion.p>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 space-y-5"
              >
                {[
                  { label: 'Location', value: project.location },
                  { label: 'Scope', value: project.scope },
                  { label: 'Category', value: project.category },
                  { label: 'Status', value: project.status === 'completed' ? 'Completed' : 'Ongoing' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-6 border-b border-white/[0.04] pb-4">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-brand-muted w-24 flex-shrink-0 pt-0.5">{item.label}</span>
                    <span className="text-[15px] text-brand-cream">{item.value}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <PremiumButton label="Discuss Similar Project" href="/contact" variant="gold" />
                <PremiumButton label="View All Projects" href="/projects" variant="outline-glass" />
              </motion.div>
            </div>

            {/* Project Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel rounded-[24px] aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden relative"
            >
              <Image
                src={project.image}
                alt={`${project.title} — ${project.scope} by Buildora Projects in ${project.location}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-spacing bg-brand-charcoal">
        <div className="container text-center">
          <h2 className="font-heading text-heading text-brand-white mb-6">INTERESTED IN THIS TYPE OF PROJECT?</h2>
          <p className="text-brand-muted text-body-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Let us discuss how we can deliver similar quality for your project.
          </p>
          <PremiumButton label="Request Consultation" href="/contact" variant="gold" size="large" />
        </div>
      </section>
    </div>
  );
}
