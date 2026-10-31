'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { BRAND, NAV_LINKS, SERVICES } from '@/lib/constants';

function SocialButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-brand-muted hover:text-brand-white hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Grey line divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="bg-gradient-to-b from-brand-charcoal to-brand-black pt-20 md:pt-24 pb-8 relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="row g-5"
          >
            {/* Brand Column */}
            <div className="col-12 col-xl-4">
              {/* Text wordmark */}
              <div className="flex items-baseline gap-0 mb-3">
                <span className="font-heading text-[32px] tracking-[0.06em] text-brand-white">BUILDORA</span>
              </div>
              <p className="text-[12px] tracking-[0.12em] uppercase text-brand-silver mb-4">Build. Finish. Furnish.</p>
              <p className="text-brand-muted text-[15px] leading-[1.8] max-w-sm mb-4">
                Buildora delivers construction, interior fit-out, development, and project management solutions across Pakistan. Based in Lahore.
              </p>
              <div className="d-flex items-center gap-3">
                <SocialButton href="https://www.instagram.com/buildoraprojects/" label="Visit Buildora Projects on Instagram">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </SocialButton>
                <SocialButton href="#" label="Facebook">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </SocialButton>
              </div>
              <p className="text-[13px] text-brand-silver mt-4 font-semibold">
                <a href="https://www.instagram.com/buildoraprojects/" target="_blank" rel="noopener noreferrer" className="hover:underline">→ Follow Buildora on Instagram</a>
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-md-4 col-xl-2">
              <h4 className="font-heading text-lg tracking-wider text-brand-white mb-4">QUICK LINKS</h4>
              <ul className="list-unstyled space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-brand-muted text-[15px] hover:text-brand-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-6 col-md-4 col-xl-3">
              <h4 className="font-heading text-lg tracking-wider text-brand-white mb-4">SERVICES</h4>
              <ul className="list-unstyled" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {SERVICES.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <Link href={`/services#${s.id}`} className="text-brand-muted text-[15px] hover:text-brand-white transition-colors duration-300" style={{ lineHeight: '1.6' }}>
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-12 col-md-4 col-xl-3">
              <h4 className="font-heading text-lg tracking-wider text-brand-white mb-4">CONTACT</h4>
              <div className="space-y-4 text-brand-muted text-[15px]">
                <div className="d-flex align-items-start gap-3">
                  <svg className="w-4 h-4 text-brand-silver mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"/></svg>
                  <span className="text-wrap">{BRAND.address}</span>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <svg className="w-4 h-4 text-brand-silver mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                  <a href={`mailto:${BRAND.email}`} className="hover:text-brand-white transition-colors">{BRAND.email}</a>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <svg className="w-4 h-4 text-brand-silver mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                  <div className="space-y-1">
                    {BRAND.phone.map((p) => (
                      <a key={p} href={`tel:${p.replace(/-/g, '')}`} className="block hover:text-brand-white transition-colors">{p}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="mt-5 pt-4 border-t border-white/[0.06] d-flex flex-column flex-md-row align-items-center justify-between gap-4">
            <p className="text-brand-muted text-[13px] mb-0">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] d-flex align-items-center justify-center text-brand-muted hover:text-brand-white hover:border-white/30 transition-all duration-300 cursor-pointer"
              aria-label="Back to top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
