'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PremiumButton from '@/components/ui/PremiumButton';
import ProjectImageCollage from '@/components/ui/ProjectImageCollage';

const BULLETS = [
  'Quality Materials',
  'Timely Project Delivery',
  'Competitive Pricing',
  'Client-Focused Approach',
  'Proven Track Record',
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" ref={ref} className="section-spacing bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 arch-grid-fine opacity-10" />

      <div className="container relative z-10">
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Left Column: Visual collage with real project images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="col-12 col-lg-5"
          >
            <ProjectImageCollage
              mainImage="/images/projects/d-heights.jpg"
              mainAlt="D-Heights — flagship commercial development by Buildora"
              secondaryImage="/images/projects/defence-raya-club.jpg"
              secondaryAlt="Defence Raya Golf & Country Club — premium construction by Buildora"
              tertiaryImage="/images/projects/gourmet-foods.jpg"
              tertiaryAlt="Gourmet Foods restaurant interior fit-out by Buildora"
              label="Based in Lahore"
              caption="Serving Across Pakistan"
            />
          </motion.div>

          {/* Right Column: Text & Bullets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="col-12 col-lg-7"
          >
            <div className="d-flex flex-col gap-3">
              <span className="font-accent italic text-brand-silver text-base md:text-lg tracking-wide">
                Why Buildora?
              </span>
              <h2 className="text-heading text-brand-white">
                Buildora’s Construction Expertise
              </h2>
              <p className="text-brand-silver text-body-lg leading-relaxed mt-2">
                Buildora combines construction expertise, interior execution, and project management to deliver projects with quality, clarity, and care.
              </p>
            </div>

            {/* Bullet List */}
            <div className="mt-4 row g-3">
              {BULLETS.map((bullet, i) => (
                <div key={i} className="col-12 col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <span 
                      style={{ 
                        width: '8px', 
                        height: '8px', 
                        background: '#FFFFFF', 
                        borderRadius: '50%', 
                        flexShrink: 0 
                      }} 
                    />
                    <span className="text-brand-cream text-[15px] font-medium tracking-wide">
                      {bullet}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <PremiumButton label="Learn More About Us" href="/about" variant="secondary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
