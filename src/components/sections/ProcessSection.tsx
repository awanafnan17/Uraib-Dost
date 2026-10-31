'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const STEPS = [
  {
    num: '01',
    title: 'Consultation',
    description: 'We conduct detailed initial consultations to understand your project vision, budget parameters, and structural design requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A2.25 2.25 0 0112.75 21.5h-1.5a2.25 2.25 0 01-2.25-2.263V19.13m4.5-9.75a3 3 0 11-6 0 3 3 0 016 0zm-7.5 9.75a9.337 9.337 0 004.121.952 9.38 9.38 0 002.625-.372 9.337 9.337 0 00-4.121-.952 4.125 4.125 0 00-7.533 2.493M3.75 7.5a3 3 0 116 0 3 3 0 01-6 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Planning',
    description: 'Our architectural and engineering teams develop detailed project planning blueprints, material lists, and construction schedules.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 12.408l-2.013.201a1.5 1.5 0 01-1.641-1.313l-1.047-10.47a1.5 1.5 0 011.313-1.641l2.013-.201m-2.013 13.625l1.252-12.5" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Construction',
    description: 'Our site teams manage construction, structural builds, and interior fit-outs under strict quality control standards.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21h10.5V6.75H6.75V21zm10.5-10.5h.75m-.75 3h.75m-.75 3h.75" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Delivery',
    description: 'We perform multi-point quality inspections and commissioning checks before handing over the completed space to the client.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="process" ref={ref} className="section-spacing bg-brand-charcoal relative overflow-hidden">
      <div className="absolute inset-0 arch-grid-fine opacity-10 pointer-events-none" />
      
      <div className="container relative z-10">
        <SectionHeading
          label="Buildora’s Process"
          title="From Concept to Completion"
          description="A transparent, milestones-driven construction and fit-out execution process delivered across Pakistan."
          align="center"
        />

        <div className="row g-4 relative mt-5">
          {/* Connecting Line - Desktop Only */}
          <div className="position-absolute top-1/2 start-0 end-0 h-[1px] bg-white/10 d-none d-lg-block z-0" style={{ transform: 'translateY(-60px)' }} />

          {STEPS.map((step, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3 z-10">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
                className="text-center px-3"
              >
                {/* Step Circle */}
                <div 
                  className="mx-auto rounded-full bg-brand-black border d-flex items-center justify-center text-brand-white transition-colors duration-500" 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
                  }}
                >
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="mt-4 font-heading text-brand-silver text-sm tracking-widest uppercase">
                  Step {step.num}
                </div>

                {/* Step Title */}
                <h3 className="process-step-title font-heading text-brand-white mt-2 tracking-wide">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-brand-muted mt-3 text-sm leading-relaxed max-w-[240px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
