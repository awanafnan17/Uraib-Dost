'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export default function StatCounter({
  value,
  suffix = '',
  label,
  duration = 2000,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="flex items-baseline justify-center gap-1">
        <span className="font-heading text-6xl md:text-7xl lg:text-8xl text-brand-white">
          {count}
        </span>
        <span className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-silver">
          {suffix}
        </span>
      </div>
      <p className="mt-3 text-xs md:text-sm tracking-[0.2em] uppercase text-brand-muted">
        {label}
      </p>
    </div>
  );
}
