'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="testimonials" ref={ref} className="section-spacing bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 arch-grid-fine opacity-10 pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading
          label="Buildora’s Clients"
          title="Buildora’s Clients"
          description="Client feedback and testimonials from residential, commercial, and hospitality projects executed across Pakistan."
        />

        <div className="row g-4">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} className="col-12 col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="testimonial-card h-100 d-flex flex-column"
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '28px' }}>
                  {[...Array(t.rating)].map((_, s) => (
                    <svg key={s} style={{ width: '18px', height: '18px', color: '#FFFFFF' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="font-accent"
                  style={{
                    color: 'rgba(240,236,227,0.9)',
                    fontSize: '16px',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    flex: 1,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Client info — pinned to bottom */}
                <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <p className="text-brand-white" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '2px' }}>
                    {t.name}
                  </p>
                  <p className="text-brand-muted" style={{ fontSize: '12px' }}>
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
