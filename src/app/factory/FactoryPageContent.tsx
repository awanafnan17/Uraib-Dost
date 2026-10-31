'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import PremiumButton from '@/components/ui/PremiumButton';
import ProjectImageCollage from '@/components/ui/ProjectImageCollage';

const CAPABILITIES = [
  { title: 'Custom Joinery & Woodwork', description: 'Precision woodwork and custom cabinetry manufactured to exact specifications for residential and commercial interiors.' },
  { title: 'Metal Fabrication & Structural Steel', description: 'Structural steel components, decorative metalwork, railings, and custom architectural metal fabrication.' },
  { title: 'Bespoke Furniture Production', description: 'Custom furniture design and manufacturing using premium hardwoods, veneers, and modern materials.' },
  { title: 'Stone, Marble & Tile Work', description: 'Custom stone cutting, marble finishing, polishing, and precision installation for luxury spaces.' },
  { title: 'Modular & Pre-Fabricated Components', description: 'Pre-fabricated building panels, modular units, and standardized components for faster on-site assembly.' },
  { title: 'Quality Testing & Assurance', description: 'In-house material testing labs ensuring every component meets Pakistani and international construction standards.' },
];

export default function FactoryPageContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref}>
      {/* Hero with background construction/factory image */}
      <section 
        className="navbar-clearance section-spacing relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url("/images/projects/factory-overview.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(15%)',
        }}
      >
        <div className="absolute inset-0 arch-grid opacity-15 pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
          >
            <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.4)' }} />
            <span className="font-accent italic text-brand-silver text-lg">Buildora’s Factory</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-display text-brand-white"
            style={{ maxWidth: '800px' }}
          >
            BUILDORA’S FACTORY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-brand-silver text-body-lg"
            style={{ marginTop: '24px', maxWidth: '640px', lineHeight: 1.65 }}
          >
            Our in-house manufacturing and fabrication facility supports end-to-end production capabilities, ensuring quality control from raw material to finished product.
          </motion.p>
        </div>
      </section>

      {/* Factory Overview Visual */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="image-frame"
          style={{ position: 'relative', aspectRatio: '21/9', borderRadius: '28px' }}
        >
          <Image
            src="/images/projects/factory-overview.jpg"
            alt="Buildora Projects manufacturing and fabrication facility"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.6), transparent)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 32px' }}>
            <span style={{
              display: 'inline-block', padding: '6px 18px', borderRadius: '999px',
              background: 'rgba(5,5,5,0.7)', backdropFilter: 'blur(12px)',
              color: '#FFFFFF', fontSize: '11px', letterSpacing: '0.18em',
              textTransform: 'uppercase', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)',
            }}>
              In-House Production Facility
            </span>
          </div>
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="section-spacing bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 arch-grid-fine opacity-15 pointer-events-none" />
        <div className="container relative z-10">
          <SectionHeading eyebrow="What We Produce" title="BUILDORA’S FACTORY CAPABILITIES" align="center" />

          <div className="row g-4">
            {CAPABILITIES.map((cap, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="factory-card h-100 d-flex flex-column bg-brand-graphite"
                  style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: '32px' }}
                >
                  <div className="number-badge">
                    <span className="font-heading text-brand-white" style={{ fontSize: '20px', letterSpacing: '0.04em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3
                    className="font-heading text-brand-white"
                    style={{ fontSize: '20px', letterSpacing: '0.06em', lineHeight: 1.2, marginBottom: '16px' }}
                  >
                    {cap.title.toUpperCase()}
                  </h3>

                  <p className="text-brand-muted" style={{ fontSize: '15px', lineHeight: 1.75, marginBottom: 0 }}>
                    {cap.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-spacing">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <SectionHeading eyebrow="Buildora’s Quality Standards" title="QUALITY ASSURANCE" />
              <p className="text-brand-muted text-body-lg" style={{ lineHeight: 1.8, marginBottom: '24px' }}>
                Every component leaving our factory undergoes rigorous quality checks. Our facility operates under strict manufacturing standards to ensure consistency, durability, and premium finish across all production.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Material testing and certification', 'Dimensional accuracy verification', 'Surface finish quality control', 'Load and stress testing', 'Environmental compliance'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFFFFF', flexShrink: 0 }} />
                    <span className="text-brand-cream" style={{ fontSize: '15px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-lg-6">
              <ProjectImageCollage
                mainImage="/images/projects/jalal-sons.jpg"
                mainAlt="Jalal Sons commercial construction and exterior finishing by Buildora Projects"
                secondaryImage="/images/projects/lalqila-restaurant.jpg"
                secondaryAlt="LalQila Restaurant — construction execution and architectural detail by Buildora"
                tertiaryImage="/images/projects/mall-1.jpg"
                tertiaryAlt="Mall-1 commercial development and construction by Buildora Projects"
                label="Factory & Production"
                caption="Quality Assured Execution"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-brand-charcoal">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="font-heading text-heading text-brand-white" style={{ marginBottom: '24px' }}>NEED CUSTOM MANUFACTURING?</h2>
          <p className="text-brand-muted text-body-lg" style={{ maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.65 }}>
            Our factory can produce custom components for your construction or interior project.
          </p>
          <PremiumButton label="Request Consultation" href="/contact" variant="primary" size="large" />
        </div>
      </section>
    </div>
  );
}
