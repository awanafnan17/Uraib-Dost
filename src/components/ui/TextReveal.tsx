'use client';

import { useRef, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

/**
 * Custom text reveal animation using CSS + IntersectionObserver.
 * No paid GSAP SplitText plugin required.
 * Splits text into words, wraps each in a span with overflow-hidden parent,
 * and animates them line-by-line on scroll.
 */
export default function TextReveal({
  text,
  tag: Tag = 'h2',
  className,
  delay = 0,
  staggerDelay = 0.05,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const words = useMemo(() => text.split(' '), [text]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add('text-reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="text-reveal-container">
      <Tag className={cn('flex flex-wrap', className)}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
            <span
              className="text-reveal-word inline-block translate-y-full opacity-0"
              style={{
                transitionDelay: `${delay + i * staggerDelay}s`,
                transitionProperty: 'transform, opacity',
                transitionDuration: '0.7s',
                transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)',
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </Tag>

      <style jsx>{`
        .text-reveal-container.text-reveal-active .text-reveal-word {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
