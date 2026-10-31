// Buildora Projects - TypeScript Interfaces (Phase 1.7)

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface ProjectDetail {
  slug: string;
  title: string;
  location: string;
  category: string;
  categorySlug: string;
  scope: string;
  description: string;
  image: string;
  gallery: readonly string[];
  featured: boolean;
  status: 'completed' | 'ongoing';
  progress?: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface SectionHeadingProps {
  label?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
  titleClassName?: string;
}

export interface PremiumButtonProps {
  label: string;
  href?: string;
  variant?: 'gold' | 'glass' | 'outline-glass' | 'dark';
  size?: 'default' | 'large';
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
