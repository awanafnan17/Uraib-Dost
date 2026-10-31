'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PremiumButton from '@/components/ui/PremiumButton';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section 
      id="cta" 
      ref={ref} 
      className="section-spacing relative overflow-hidden bg-brand-black"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.85)), url("/images/projects/defence-raya-club.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(15%)',
      }}
    >
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-[28px] p-10 md:p-16 lg:p-20 text-center"
          style={{ background: 'rgba(10,10,10,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-brand-silver mb-4">
            GET IN TOUCH
          </span>
          <h2 className="font-heading text-heading tracking-wider text-brand-white max-w-3xl mx-auto">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-brand-silver text-[15px] md:text-base leading-[1.7] mt-5 max-w-xl mx-auto">
            Let’s bring your vision to life with Buildora’s construction and project execution expertise.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PremiumButton label="Request a Quote" href="/contact" variant="primary" size="large" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
