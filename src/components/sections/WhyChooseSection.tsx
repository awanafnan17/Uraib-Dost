'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WHY_CHOOSE } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

export default function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="why-choose" ref={ref} className="section-spacing bg-brand-charcoal relative overflow-hidden">
      <div className="absolute inset-0 arch-grid-fine opacity-15 pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading
          label="Why Buildora"
          title="Why Choose Us"
          description="What sets Buildora Projects apart in the construction and development industry."
        />

        <div className="row g-4">
          {WHY_CHOOSE.map((item, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="why-card h-100 d-flex flex-column"
                style={{ minHeight: '260px' }}
              >
                {/* Number Badge — in normal flow, not absolute */}
                <div className="number-badge">
                  <span className="font-heading text-brand-gold" style={{ fontSize: '20px', letterSpacing: '0.04em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3
                  className="font-heading text-brand-white"
                  style={{ fontSize: '20px', letterSpacing: '0.08em', lineHeight: 1.2 }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-brand-muted"
                  style={{ fontSize: '14px', lineHeight: 1.75, marginTop: '18px' }}
                >
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
