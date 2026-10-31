'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PremiumButton from '@/components/ui/PremiumButton';

const SERVICES_DETAIL = [
  {
    id: 'construction-management',
    title: 'Construction Management',
    description: 'Professional management of construction schedules, budget controls, material procurement, and quality audits on site across Pakistan.',
    icon: <svg style={{ width: '24px', height: '24px', color: '#FFFFFF' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M6 22V4c0-.55.45-1 1-1h10a1 1 0 011 1v18M10 7h4M10 11h4M10 15h4" /></svg>,
    deliverables: ['Project Scheduling', 'Budget Controls', 'Quality Audits', 'Subcontractor Supervision', 'Safety Compliance'],
  },
  {
    id: 'design-build',
    title: 'Design & Build',
    description: 'Combining concept development, architectural planning, and execution seamlessly to deliver turnkey structural projects.',
    icon: <svg style={{ width: '24px', height: '24px', color: '#FFFFFF' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/></svg>,
    deliverables: ['Architectural Drafting', '3D Modeling', 'Permit Submissions', 'Engineering Schematics', 'Material Schedules'],
  },
  {
    id: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with high-end structural changes, finishing touch updates, and layout optimization.',
    icon: <svg style={{ width: '24px', height: '24px', color: '#FFFFFF' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
    deliverables: ['Layout Planning', 'Structural Upgrades', 'High-End Remodeling', 'Electrical & MEP Re-fitting', 'Premium Finishes'],
  },
  {
    id: 'project-consultancy',
    title: 'Project Consultancy',
    description: 'Providing feasibility studies, structural planning advice, project costing, and structural engineering insights.',
    icon: <svg style={{ width: '24px', height: '24px', color: '#FFFFFF' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>,
    deliverables: ['Feasibility Analysis', 'Cost Estimation', 'Structural Evaluations', 'Contract Vetting', 'Site Inspection Reports'],
  },
  {
    id: 'interior-fit-out',
    title: 'Interior Fit-Out',
    description: 'Luxury interior execution, finishing, custom furniture fabrication, and high-end detailing for premium spaces.',
    icon: <svg style={{ width: '24px', height: '24px', color: '#FFFFFF' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.52-4.48-9.99-10-9.99z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></svg>,
    deliverables: ['Custom Millwork & Carpentry', 'Ceiling & Lighting Finishes', 'Flooring & Tiling Work', 'Paint & Decorative Details', 'Furniture Coordination'],
  },
  {
    id: 'smart-automation',
    title: 'Smart Building Automation',
    description: 'Integrating modern building intelligence, central climate controls, high-end security, and energy-efficient systems.',
    icon: <svg style={{ width: '24px', height: '24px', color: '#FFFFFF' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
    deliverables: ['Security Setup & IoT Integration', 'Centralized Climate Interfaces', 'Smart Lighting Networks', 'Audio-Visual Distributions', 'Energy Savings Systems'],
  },
];

export default function ServicesPageContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref}>
      {/* Page Hero with background image */}
      <section 
        className="navbar-clearance section-spacing relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url("/images/projects/d-heights.jpg")',
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
            className="d-flex align-items-center gap-3 mb-4"
          >
            <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.4)' }} />
            <span className="font-accent italic text-brand-silver text-lg">Buildora’s Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-display text-brand-white"
            style={{ maxWidth: '800px' }}
          >
            BUILDORA’S SERVICES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-brand-silver text-body-lg"
            style={{ marginTop: '24px', maxWidth: '640px', lineHeight: 1.65 }}
          >
            Premium construction, interior fit-out, development, and project management solutions delivered across Pakistan.
          </motion.p>
        </div>
      </section>

      {/* Services Detail Cards */}
      <section className="section-spacing bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 arch-grid-fine opacity-15 pointer-events-none" />
        <div className="container relative z-10">
          {SERVICES_DETAIL.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="glass-card scroll-mt-24 bg-brand-graphite/90"
              style={{
                padding: '32px',
                marginBottom: i < SERVICES_DETAIL.length - 1 ? '28px' : '0',
                borderRadius: '24px',
                overflow: 'visible',
                border: '1px solid rgba(255,255,255,0.06)'
              }}
            >
              <div className="row g-4 align-items-center">
                {/* Icon column */}
                <div className="col-12 col-lg-1">
                  <div
                    className="service-icon"
                    style={{ 
                      background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px',
                      width: '56px',
                      height: '56px',
                      marginBottom: 0
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content column */}
                <div className="col-12 col-lg-6">
                  <h2
                    className="font-heading text-brand-white"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', letterSpacing: '0.06em', marginBottom: '12px' }}
                  >
                    {service.title.toUpperCase()}
                  </h2>
                  <p className="text-brand-muted" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: 0 }}>
                    {service.description}
                  </p>
                </div>

                {/* Deliverables column */}
                <div className="col-12 col-lg-5">
                  <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B5B5B5', marginBottom: '16px', fontWeight: 600 }}>
                    Key Deliverables
                  </p>
                  <div className="row g-2">
                    {service.deliverables.map((d) => (
                      <div key={d} className="col-12 col-sm-6">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
                          <span className="text-brand-silver" style={{ fontSize: '14px' }}>{d}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="font-heading text-heading text-brand-white" style={{ marginBottom: '24px' }}>NEED A SERVICE?</h2>
          <p className="text-brand-muted text-body-lg" style={{ maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.65 }}>
            Tell us about your project and we will recommend the right service package.
          </p>
          <PremiumButton label="Request Consultation" href="/contact" variant="primary" size="large" />
        </div>
      </section>
    </div>
  );
}
