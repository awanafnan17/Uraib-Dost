'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import PremiumButton from '@/components/ui/PremiumButton';

const ICONS: Record<string, React.ReactNode> = {
  compass: <svg style={{ width: '28px', height: '28px', overflow: 'visible' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/></svg>,
  building: <svg style={{ width: '28px', height: '28px', overflow: 'visible' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2 22h20M6 18V4a1 1 0 011-1h10a1 1 0 011 1v14M10 7h4M10 11h4M10 15h4"/></svg>,
  palette: <svg style={{ width: '28px', height: '28px', overflow: 'visible' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.52-4.48-9.99-10-9.99z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></svg>,
  clipboard: <svg style={{ width: '28px', height: '28px', overflow: 'visible' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>,
  cpu: <svg style={{ width: '28px', height: '28px', overflow: 'visible' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
  settings: <svg style={{ width: '28px', height: '28px', overflow: 'visible' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
};

const LOCAL_SERVICES = [
  {
    id: 'construction-management',
    title: 'Construction Management',
    description: 'Professional management of construction schedules, budget controls, material procurement, and quality audits on site.',
    icon: 'building',
  },
  {
    id: 'design-build',
    title: 'Design & Build',
    description: 'Combining concept development, architectural planning, and execution seamlessly to deliver turnkey structural projects.',
    icon: 'compass',
  },
  {
    id: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with high-end structural changes, finishing touch updates, and layout optimization.',
    icon: 'settings',
  },
  {
    id: 'project-consultancy',
    title: 'Project Consultancy',
    description: 'Providing feasibility studies, structural planning advice, project costing, and structural engineering insights.',
    icon: 'clipboard',
  },
  {
    id: 'interior-fit-out',
    title: 'Interior Fit-Out',
    description: 'Luxury interior execution, finishing, custom furniture fabrication, and high-end detailing for premium spaces.',
    icon: 'palette',
  },
  {
    id: 'smart-automation',
    title: 'Smart Building Automation',
    description: 'Integrating modern building intelligence, central climate controls, high-end security, and energy-efficient systems.',
    icon: 'cpu',
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="services" ref={ref} className="section-spacing bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 arch-grid-fine opacity-10 pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading 
          label="Buildora’s Services" 
          title="Comprehensive Construction and Interior Solutions" 
          description="End-to-end building and interior execution services delivered across Pakistan with absolute precision." 
          titleClassName="text-heading-services"
        />

        <div className="row g-4">
          {LOCAL_SERVICES.map((service, i) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="h-100"
              >
                <Link href={`/services#${service.id}`} className="group block h-100">
                  <div 
                    className="service-card h-100 d-flex flex-column bg-brand-graphite/90" 
                    style={{ 
                      minHeight: '340px', 
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '24px',
                      padding: '36px' 
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="service-icon text-brand-white group-hover:bg-white/[0.08] transition-colors duration-300"
                      style={{ 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        width: '56px',
                        height: '56px'
                      }}
                    >
                      {ICONS[service.icon] || ICONS.building}
                    </div>

                    <h3
                      className="font-heading text-brand-white group-hover:text-brand-silver transition-colors duration-300"
                      style={{ fontSize: '20px', letterSpacing: '0.08em', lineHeight: 1.2, marginTop: '20px' }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-brand-muted mt-3" style={{ fontSize: '14px', lineHeight: 1.75, flex: 1 }}>
                      {service.description}
                    </p>

                    <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <span className="group-hover:text-brand-white group-hover:gap-3 transition-all duration-300" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                        Learn More
                        <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ marginTop: '48px', display: 'flex', justifyContent: 'center' }}
        >
          <PremiumButton label="View All Services" href="/services" variant="secondary" />
        </motion.div>
      </div>
    </section>
  );
}
