'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PremiumButton from '@/components/ui/PremiumButton';

const HERO_STATS = [
  { label: 'Based In', value: 'Lahore' },
  { label: 'Serving Across', value: 'Pakistan' },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      id="hero" 
      ref={ref} 
      className="relative min-h-screen bg-brand-black overflow-hidden flex items-center"
    >
      {/* Decorative grids */}
      <div className="absolute inset-0 arch-grid opacity-15 pointer-events-none" />

      {/* Content Container */}
      <div className="container relative z-10 navbar-clearance w-full">
        <div className="row align-items-center g-5">
          {/* LEFT COLUMN: Main content */}
          <div className="col-12 col-lg-8 col-xl-7">
            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="d-flex align-items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-white/40" />
              <span className="font-accent italic text-brand-silver text-sm md:text-base tracking-[0.15em]">
                Build. Finish. Furnish.
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={isInView ? { y: '0%' } : {}}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                className="hero-title text-brand-white mb-4"
              >
                Building Tomorrow’s Landmarks Today
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-3 text-brand-silver text-body-lg max-w-[640px]"
            >
              Premium construction, interior fit-out, development, and project management solutions delivered across Pakistan.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-5 d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3"
            >
              <PremiumButton label="View Projects" href="/projects" variant="primary" />
              <PremiumButton label="Book a Free Consultation" href="/contact" variant="secondary" />
            </motion.div>
          </div>
        </div>

        {/* Stats Row inside Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="row g-3 mt-5 pt-4 border-t border-white/[0.05]"
        >
          {HERO_STATS.map((stat, i) => (
            <div key={i} className="col-6 col-md-6">
              <div className="glass-panel stat-card" style={{ background: 'rgba(10,10,10,0.4)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="font-heading stat-value text-brand-white tracking-wider mb-0" style={stat.value.length > 10 ? { fontSize: 'clamp(1.0rem, 1.4vw, 1.25rem)' } : undefined}>{stat.value}</p>
                <p className="stat-label uppercase text-brand-muted mt-2 mb-0 font-body" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
