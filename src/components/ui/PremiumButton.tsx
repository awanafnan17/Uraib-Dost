'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'dark' | 'gold' | 'glass' | 'outline-glass';

interface PremiumButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: 'default' | 'large';
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: '#FFFFFF',
    color: '#050505',
    border: '1px solid #FFFFFF',
  },
  secondary: {
    background: 'transparent',
    color: '#FFFFFF',
    border: '1px solid rgba(255,255,255,0.5)',
  },
  // Legacy aliases — map to primary/secondary
  gold: {
    background: '#FFFFFF',
    color: '#050505',
    border: '1px solid #FFFFFF',
  },
  glass: {
    background: 'transparent',
    color: '#FFFFFF',
    border: '1px solid rgba(255,255,255,0.5)',
  },
  'outline-glass': {
    background: 'transparent',
    color: '#FFFFFF',
    border: '1px solid rgba(255,255,255,0.35)',
  },
  dark: {
    background: '#1A1A1A',
    color: '#F3F3F3',
    border: '1px solid rgba(255,255,255,0.1)',
  },
};

const hoverVariantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: 'transparent',
    color: '#FFFFFF',
    border: '1px solid #FFFFFF',
  },
  secondary: {
    background: '#FFFFFF',
    color: '#050505',
    border: '1px solid #FFFFFF',
  },
  gold: {
    background: 'transparent',
    color: '#FFFFFF',
    border: '1px solid #FFFFFF',
  },
  glass: {
    background: '#FFFFFF',
    color: '#050505',
    border: '1px solid #FFFFFF',
  },
  'outline-glass': {
    background: 'rgba(255,255,255,0.08)',
    color: '#FFFFFF',
    border: '1px solid rgba(255,255,255,0.5)',
  },
  dark: {
    background: '#1A1A1A',
    color: '#FFFFFF',
    border: '1px solid rgba(255,255,255,0.2)',
  },
};

export default function PremiumButton({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  type = 'button',
  className = '',
  disabled = false,
}: PremiumButtonProps) {
  const baseStyle: React.CSSProperties = {
    borderRadius: '999px',
    minHeight: size === 'large' ? '56px' : '52px',
    padding: size === 'large' ? '14px 36px' : '14px 30px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: '"Times New Roman", Times, serif',
    fontWeight: 700,
    fontSize: '13px',
    letterSpacing: '0.12em',
    lineHeight: 1,
    textTransform: 'uppercase' as const,
    whiteSpace: 'nowrap' as const,
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: 'relative' as const,
    zIndex: 1,
    transition: 'transform 250ms ease, background 250ms ease, color 250ms ease, border-color 250ms ease, box-shadow 250ms ease',
    textDecoration: 'none',
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' as const : 'auto' as const,
    ...variantStyles[variant],
  };

  const content = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      whileTap={{ scale: 0.97 }}
      style={{ color: 'inherit' }}
    >
      {label}
    </motion.span>
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const hover = hoverVariantStyles[variant];
    target.style.transform = 'translateY(-2px)';
    target.style.boxShadow = '0 14px 35px rgba(0, 0, 0, 0.3)';
    if (hover.background) target.style.background = hover.background as string;
    if (hover.color) target.style.color = hover.color as string;
    if (hover.border) target.style.border = hover.border as string;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const base = variantStyles[variant];
    target.style.transform = 'translateY(0)';
    target.style.boxShadow = 'none';
    if (base.background) target.style.background = base.background as string;
    if (base.color) target.style.color = base.color as string;
    if (base.border) target.style.border = base.border as string;
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`premium-button ${variant} ${className}`}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`premium-button ${variant} ${className}`}
      style={baseStyle}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
}
