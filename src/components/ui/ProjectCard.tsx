'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  location: string;
  category: string;
  image?: string;
  status?: 'completed' | 'ongoing';
  progress?: number;
  index: number;
  className?: string;
}

export default function ProjectCard({
  title,
  location,
  category,
  image,
  status = 'completed',
  progress,
  index,
  className,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.77, 0, 0.175, 1],
      }}
      className={cn(
        'card-premium group relative overflow-hidden bg-brand-graphite border border-brand-steel/20',
        'hover:border-brand-white/30',
        className
      )}
    >
      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal">
        {image ? (
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="absolute inset-0 arch-grid-fine opacity-50" />
            <div className="text-center relative z-10">
              <svg
                className="w-14 h-14 text-brand-steel/50 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="1" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="text-xs text-brand-steel/60 tracking-[0.2em] uppercase">
                {category}
              </span>
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-xs tracking-[0.2em] uppercase text-brand-white">
            View Project
          </span>
        </div>

        {/* Status Badge */}
        {status === 'ongoing' && (
          <div className="absolute top-4 left-4 px-4 py-1.5 bg-brand-white text-brand-black text-[10px] tracking-[0.15em] uppercase font-medium">
            In Progress
          </div>
        )}

        {/* Category Tag */}
        <div className="absolute top-4 right-4 px-4 py-1.5 bg-brand-black/70 backdrop-blur-sm text-brand-muted text-[10px] tracking-[0.15em] uppercase">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-heading text-xl md:text-2xl tracking-[0.06em] text-brand-white mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-[15px] text-brand-muted tracking-wider">
          {location}
        </p>

        {/* Progress Bar */}
        {status === 'ongoing' && progress !== undefined && (
          <div className="mt-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] text-brand-muted uppercase tracking-[0.15em]">
                Progress
              </span>
              <span className="text-sm text-brand-silver font-heading tracking-wider">
                {progress}%
              </span>
            </div>
            <div className="w-full h-[2px] bg-brand-steel/30">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${progress}%` } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
                className="h-full bg-brand-white"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
