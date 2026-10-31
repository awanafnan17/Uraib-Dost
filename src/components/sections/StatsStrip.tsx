'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS_ITEMS = [
  { value: 'Lahore', label: 'Based In' },
  { value: 'Serving Across Pakistan', label: 'Coverage Area' },
];

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section 
      ref={ref} 
      className="py-12 bg-brand-black border-y border-white/[0.05] relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="row g-4 justify-content-center text-center">
          {STATS_ITEMS.map((item, i) => (
            <div key={i} className="col-6 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="px-2"
              >
                <span 
                  className="font-heading text-brand-white block" 
                  style={{ 
                    fontSize: item.value.length > 15 ? 'clamp(1.2rem, 1.8vw, 1.7rem)' : 'clamp(1.6rem, 2.5vw, 2.6rem)', 
                    lineHeight: 1.1,
                    letterSpacing: '0.04em'
                  }}
                >
                  {item.value}
                </span>
                <span 
                  className="text-brand-muted block mt-2 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-body"
                >
                  {item.label}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
