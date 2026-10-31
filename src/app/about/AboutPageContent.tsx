'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import PremiumButton from '@/components/ui/PremiumButton';
import { STATS, CORE_VALUES } from '@/lib/constants';

export default function AboutPageContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref}>
      {/* Page Hero with background image */}
      <section 
        className="navbar-clearance section-spacing relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url("/images/projects/defence-raya-club.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(15%)',
        }}
      >
        <div className="absolute inset-0 arch-grid opacity-15" />
        <div className="container relative z-10">
          <div className="row g-5 items-center">
            <div className="col-12 col-lg-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-10 h-px bg-white/40" />
                <span className="font-accent italic text-brand-silver text-lg">Who We Are</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-display text-brand-white"
              >
                ABOUT BUILDORA
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 space-y-5"
              >
                <p className="text-brand-cream text-body-lg leading-[1.85]">
                  Buildora delivers construction, interior fit-out, development, and project management solutions across Pakistan. Based in Lahore, the company handles residential, commercial, hospitality, banking, and development sectors.
                </p>
                <p className="text-brand-muted text-body-lg leading-[1.85]">
                  From foundation to finishing, we bring professional construction expertise and project management to every engagement. Our services span the full spectrum of modern building: construction, development, interior fit-outs, smart automation, procurement, and facility management.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10"
              >
                <PremiumButton label="View Our Projects" href="/projects" variant="primary" />
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="col-12 col-lg-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="row g-3"
              >
                {STATS.map((stat, i) => (
                  <div key={i} className="col-6">
                    <div className="glass-card rounded-[22px] p-6 text-center" style={{ background: 'rgba(10,10,10,0.5)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span className="font-heading text-brand-white block" style={{ fontSize: stat.value.length > 10 ? 'clamp(1.0rem, 1.4vw, 1.25rem)' : 'clamp(1.25rem, 1.8vw, 1.5rem)', whiteSpace: 'normal' }}>
                        {stat.value}
                      </span>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-brand-muted mt-2 mb-0">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 arch-grid-fine opacity-20" />
        <div className="container relative z-10">
          <SectionHeading eyebrow="Our Purpose" title="MISSION & VISION" align="center" />

          <div className="row g-4 max-w-4xl mx-auto">
            <div className="col-12 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="glass-panel rounded-[24px] p-8 md:p-10 h-100"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <h3 className="font-heading text-2xl md:text-3xl text-brand-white tracking-wider mb-4">OUR MISSION</h3>
                <p className="text-brand-muted text-[15px] leading-[1.8] mb-0">
                  To deliver premium construction, development, and interior execution services that exceed expectations. We combine professional project management with meticulous craftsmanship to create spaces of lasting value for our clients across Pakistan.
                </p>
              </motion.div>
            </div>

            <div className="col-12 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="glass-panel rounded-[24px] p-8 md:p-10 h-100"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <h3 className="font-heading text-2xl md:text-3xl text-brand-white tracking-wider mb-4">OUR VISION</h3>
                <p className="text-brand-muted text-[15px] leading-[1.8] mb-0">
                  To be recognized as Pakistan&apos;s most trusted name in construction and development, setting new standards for quality, innovation, and smart building practices. We aim to shape the future of construction through technology, transparency, and uncompromising excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading eyebrow="What Drives Us" title="BUILDORA’S CORE VALUES" align="center" />

          <div className="row g-4">
            {CORE_VALUES.map((val, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="glass-card rounded-[22px] p-7 md:p-8 h-100"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-[14px] border border-white/20 bg-white/[0.04] flex items-center justify-center mb-6">
                    <span className="font-heading text-xl text-brand-white">0{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-xl tracking-wider text-brand-white mb-3">{val.title.toUpperCase()}</h3>
                  <p className="text-brand-muted text-[15px] leading-[1.75] mb-0">{val.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-brand-charcoal">
        <div className="container text-center">
          <h2 className="font-heading text-heading text-brand-white mb-6">READY TO BUILD?</h2>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Let us bring your vision to life with premium construction and interior execution.
          </p>
          <PremiumButton label="Request Consultation" href="/contact" variant="primary" size="large" />
        </div>
      </section>
    </div>
  );
}
