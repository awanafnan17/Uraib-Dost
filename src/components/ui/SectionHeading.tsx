'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { SectionHeadingProps } from '@/types';

export default function SectionHeading({
  label,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  titleClassName,
}: SectionHeadingProps) {
  const eyebrowText = label || eyebrow;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div
      ref={ref}
      className={cn(
        'mb-14 md:mb-20',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrowText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={cn(
            'flex items-center gap-4 mb-5',
            align === 'center' && 'justify-center'
          )}
        >
          <div className="w-8 h-px" style={{ background: 'rgba(255,255,255,0.25)' }} />
          <span className="font-accent italic text-brand-silver text-base md:text-lg tracking-wide">
            {eyebrowText}
          </span>
          {align === 'center' && <div className="w-8 h-px" style={{ background: 'rgba(255,255,255,0.25)' }} />}
        </motion.div>
      )}

      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: '100%' }}
          animate={isInView ? { y: '0%' } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.77, 0, 0.175, 1] }}
          className={cn("text-heading text-brand-white", titleClassName)}
        >
          {title}
        </motion.h2>
      </div>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={cn(
            'mt-5 text-brand-muted text-body-lg leading-relaxed',
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
