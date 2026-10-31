'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-brand-black/90 backdrop-blur-2xl border-b border-white/[0.04]'
            : 'bg-transparent'
        )}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-[72px] md:h-[80px]">
            {/* LEFT: Logo mark and Text wordmark */}
            <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Buildora Projects Home">
              <div className="relative w-[28px] h-[28px] md:w-[32px] md:h-[32px]">
                <Image
                  src="/images/buildora-b-logo.png"
                  alt="Buildora B Logo"
                  fill
                  sizes="(max-width: 768px) 28px, 32px"
                  priority
                  className="object-contain filter brightness-100"
                />
              </div>
              <span className="font-heading text-[24px] md:text-[28px] tracking-[0.06em] text-brand-white group-hover:text-brand-silver transition-colors duration-300">
                BUILDORA
              </span>
            </Link>

            {/* CENTER: Nav links — desktop only */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9">
              {NAV_LINKS.filter(l => l.href !== '/').map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-[11px] tracking-[0.2em] uppercase py-2 transition-colors duration-300 font-medium',
                    pathname === link.href
                      ? 'text-brand-white font-bold'
                      : 'text-brand-silver/80 hover:text-brand-white'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-px bg-brand-white"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* RIGHT: CTA — desktop only */}
            <div className="hidden lg:block shrink-0">
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '170px',
                  minHeight: '52px',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  letterSpacing: '0.10em',
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  border: '1px solid rgba(255,255,255,0.5)',
                  color: '#FFFFFF',
                  background: 'transparent',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget;
                  t.style.background = '#FFFFFF';
                  t.style.color = '#050505';
                  t.style.borderColor = '#FFFFFF';
                  t.style.transform = 'translateY(-2px)';
                  t.style.boxShadow = '0 14px 35px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget;
                  t.style.background = 'transparent';
                  t.style.color = '#FFFFFF';
                  t.style.borderColor = 'rgba(255,255,255,0.5)';
                  t.style.transform = 'translateY(0)';
                  t.style.boxShadow = 'none';
                }}
              >
                Start Your Project
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-[5px] w-10 h-10 items-center justify-center cursor-pointer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={cn('block w-5 h-px bg-brand-white transition-all duration-300', mobileOpen && 'rotate-45 translate-y-[3px]')} />
              <span className={cn('block w-5 h-px bg-brand-white transition-all duration-300', mobileOpen && 'opacity-0')} />
              <span className={cn('block w-5 h-px bg-brand-white transition-all duration-300', mobileOpen && '-rotate-45 -translate-y-[3px]')} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-black/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'font-heading text-3xl md:text-4xl tracking-wider transition-colors duration-300',
                      pathname === link.href ? 'text-brand-white font-bold' : 'text-brand-silver hover:text-brand-white'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center h-[48px] px-8 rounded-full text-[12px] tracking-[0.14em] uppercase font-semibold bg-brand-white text-brand-black"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
