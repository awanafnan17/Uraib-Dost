// Buildora Projects - Data Constants v3
// All data sourced from verified company profile. No fabricated claims.

export const BRAND = {
  name: 'Buildora Projects',
  tagline: 'Build. Finish. Furnish.',
  description:
    'Buildora delivers premium construction, interior fit-out, development, and project management solutions across Pakistan. Based in Lahore, the company handles residential, commercial, hospitality, banking, and development projects.',
  email: 'info@buildoraprojects.com',
  phone: ['0306-4466818', '0323-4608836'],
  address: '3rd Floor, Plaza 185/6 MB, Phase 6, DHA Lahore',
  city: 'Lahore',
  country: 'Pakistan',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5!2d74.4!3d31.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDHA+Phase+6+Lahore!5e0!3m2!1sen!2spk!4v1',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Factory', href: '/factory' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SERVICES = [
  {
    id: 'architecture-design',
    title: 'Architecture & Design',
    shortTitle: 'Architecture',
    description:
      'Comprehensive architectural planning and design services that merge aesthetics with structural integrity, creating spaces that inspire.',
    icon: 'compass',
    deliverables: ['Architectural Drawings', 'Interior Layouts', '3D Visualizations', 'Structural Planning', 'Building Permits'],
  },
  {
    id: 'construction-development',
    title: 'Construction & Development',
    shortTitle: 'Construction',
    description:
      'End-to-end construction and real estate development from foundation to finishing, delivering structurally sound and architecturally refined buildings.',
    icon: 'building',
    deliverables: ['Foundation Works', 'Structural Construction', 'MEP Systems', 'Quality Assurance', 'Safety Compliance'],
  },
  {
    id: 'interior-fit-out',
    title: 'Interior Fit Out Solutions',
    shortTitle: 'Interiors',
    description:
      'Luxury interior design and execution that transforms spaces with precision craftsmanship, premium material selection, and meticulous attention to detail.',
    icon: 'palette',
    deliverables: ['Space Planning', 'Custom Furniture', 'Lighting Design', 'Material Procurement', 'Finishing Works'],
  },
  {
    id: 'project-management',
    title: 'Project Management',
    shortTitle: 'Project Management',
    description:
      'Professional project management ensuring timelines, budgets, and quality benchmarks are met with zero compromise and full transparency.',
    icon: 'clipboard',
    deliverables: ['Timeline Management', 'Budget Control', 'Quality Audits', 'Vendor Coordination', 'Progress Reports'],
  },
  {
    id: 'smart-automation',
    title: 'Smart Home & Building Automation',
    shortTitle: 'Automation',
    description:
      'Integrating modern technology into buildings for energy efficiency, security systems, and intelligent living experiences.',
    icon: 'cpu',
    deliverables: ['Home Automation', 'Security Systems', 'Energy Management', 'IoT Integration', 'Central Control'],
  },
  {
    id: 'facility-management',
    title: 'Facility & Property Management',
    shortTitle: 'Facility Mgmt',
    description:
      'Comprehensive post-construction facility and property management to maintain value, ensure smooth operations, and maximize returns.',
    icon: 'settings',
    deliverables: ['Maintenance Plans', 'Tenant Management', 'Financial Oversight', 'Emergency Response', 'Asset Tracking'],
  },
  {
    id: 'procurement',
    title: 'Procurement & Supply Chain',
    shortTitle: 'Procurement',
    description:
      'Sourcing and procuring high-quality construction materials and fittings at competitive prices through trusted, verified supply chains.',
    icon: 'truck',
    deliverables: ['Material Sourcing', 'Vendor Vetting', 'Cost Optimization', 'Logistics Management', 'Quality Testing'],
  },
] as const;

export const PROJECTS = [
  {
    slug: 'd-heights',
    title: 'D-Heights',
    location: 'DHA Lahore',
    category: 'Commercial',
    categorySlug: 'commercial',
    scope: 'Construction & Development',
    description: 'A premium commercial development project in DHA Lahore featuring modern architecture and high-quality construction standards.',
    image: '/images/projects/d-heights.jpg',
    gallery: [],
    featured: true,
    status: 'completed' as const,
  },
  {
    slug: 'defence-raya-club',
    title: 'Defence Raya Club',
    location: 'DHA Lahore',
    category: 'Hospitality',
    categorySlug: 'hospitality',
    scope: 'Interior Fit Out & Construction',
    description: 'Complete interior fit-out and construction execution for Defence Raya Club, delivering a premium hospitality environment.',
    image: '/images/projects/defence-raya-club.jpg',
    gallery: [],
    featured: true,
    status: 'completed' as const,
  },
  {
    slug: 'jalal-sons',
    title: 'Jalal Sons',
    location: 'Lahore',
    category: 'Restaurant',
    categorySlug: 'restaurant',
    scope: 'Interior Execution & Finishing',
    description: 'Premium interior execution and finishing for Jalal Sons outlet, creating an inviting retail and dining environment.',
    image: '/images/projects/jalal-sons.jpg',
    gallery: [],
    featured: false,
    status: 'completed' as const,
  },
  {
    slug: 'lalqila-restaurant',
    title: 'LalQila Restaurant',
    location: 'Lahore',
    category: 'Restaurant',
    categorySlug: 'restaurant',
    scope: 'Complete Interior Fit Out',
    description: 'Full interior fit-out for LalQila Restaurant featuring traditional aesthetics with modern construction standards.',
    image: '/images/projects/lalqila-restaurant.jpg',
    gallery: [],
    featured: true,
    status: 'completed' as const,
  },
  {
    slug: 'papa-johns',
    title: 'Papa Johns',
    location: 'Lahore',
    category: 'Restaurant',
    categorySlug: 'restaurant',
    scope: 'Interior Fit Out & Branding',
    description: 'International franchise interior fit-out meeting global brand standards with local construction excellence.',
    image: '/images/projects/papa-johns.jpg',
    gallery: [],
    featured: false,
    status: 'completed' as const,
  },
  {
    slug: 'cheezious',
    title: 'Cheezious',
    location: 'Lahore',
    category: 'Restaurant',
    categorySlug: 'restaurant',
    scope: 'Interior Execution',
    description: 'Complete interior execution for Cheezious outlet, delivering a modern and inviting dining space.',
    image: '/images/projects/cheezious.jpg',
    gallery: [],
    featured: false,
    status: 'completed' as const,
  },
  {
    slug: 'gourmet-foods',
    title: 'Gourmet Foods',
    location: 'Lahore',
    category: 'Restaurant',
    categorySlug: 'restaurant',
    scope: 'Construction & Interior',
    description: 'Construction and interior execution for Gourmet Foods, one of Pakistan\'s leading food chains.',
    image: '/images/projects/gourmet-foods.jpg',
    gallery: [],
    featured: false,
    status: 'completed' as const,
  },
  {
    slug: 'hardees',
    title: 'Hardee\'s',
    location: 'Lahore',
    category: 'Restaurant',
    categorySlug: 'restaurant',
    scope: 'Interior Fit Out',
    description: 'International franchise interior fit-out for Hardee\'s, maintaining global standards with premium finishing.',
    image: '/images/projects/hardees.jpg',
    gallery: [],
    featured: false,
    status: 'completed' as const,
  },
  {
    slug: 'dubai-islamic-bank',
    title: 'Dubai Islamic Bank',
    location: 'Lahore',
    category: 'Banking',
    categorySlug: 'banking',
    scope: 'Branch Interior & Construction',
    description: 'Complete branch interior and construction for Dubai Islamic Bank, meeting strict banking industry standards.',
    image: '/images/projects/dubai-islamic-bank.jpg',
    gallery: [],
    featured: true,
    status: 'completed' as const,
  },
  {
    slug: 'samba-bank',
    title: 'Samba Bank',
    location: 'Lahore',
    category: 'Banking',
    categorySlug: 'banking',
    scope: 'Branch Interior Fit Out',
    description: 'Professional banking branch interior fit-out for Samba Bank with security-compliant construction.',
    image: '/images/projects/samba-bank.jpg',
    gallery: [],
    featured: false,
    status: 'completed' as const,
  },
  {
    slug: 'hbl-bank',
    title: 'HBL Bank',
    location: 'Lahore',
    category: 'Banking',
    categorySlug: 'banking',
    scope: 'Branch Renovation & Interior',
    description: 'Branch renovation and interior upgrade for HBL Bank, Pakistan\'s largest private bank.',
    image: '/images/projects/hbl-bank.jpg',
    gallery: [],
    featured: false,
    status: 'completed' as const,
  },
  {
    slug: 'celebrity-residence',
    title: 'Celebrity Residence',
    location: 'Lahore',
    category: 'Celebrity Residence',
    categorySlug: 'residential',
    scope: 'Complete Residential Construction & Interiors',
    description: 'For a renowned cricketer.',
    image: '/images/projects/celebrity-residence.jpg',
    gallery: [],
    featured: true,
    status: 'completed' as const,
  },
  {
    slug: 'celebrity-project',
    title: 'Celebrity Project',
    location: 'Lahore',
    category: 'Celebrity Project',
    categorySlug: 'residential',
    scope: 'Interior Execution & Finishing',
    description: 'For a renowned artist.',
    image: '/images/projects/celebrity-project.jpg',
    gallery: [],
    featured: true,
    status: 'completed' as const,
  },
  {
    slug: 'factory-overview',
    title: 'Buildora Factory',
    location: 'Lahore',
    category: 'Industrial',
    categorySlug: 'industrial',
    scope: 'Factory Setup & Operations',
    description: 'Buildora\'s own manufacturing and fabrication facility supporting in-house production capabilities for construction and interior projects.',
    image: '/images/projects/factory-overview.jpg',
    gallery: [],
    featured: false,
    status: 'completed' as const,
  },
] as const;

export const PROJECT_CATEGORIES = [
  { slug: 'all', label: 'All Projects' },
  { slug: 'commercial', label: 'Commercial' },
  { slug: 'residential', label: 'Residential' },
  { slug: 'restaurant', label: 'Restaurant' },
  { slug: 'banking', label: 'Banking' },
  { slug: 'hospitality', label: 'Hospitality' },
  { slug: 'industrial', label: 'Industrial' },
] as const;

export const STATS = [
  { value: 'Lahore', suffix: '', label: 'Based In' },
  { value: 'Serving Across Pakistan', suffix: '', label: 'Coverage Area' },
] as const;

export const WHY_CHOOSE = [
  { title: 'Quality Materials', description: 'Sourcing and utilizing premium, certified materials to ensure the structural integrity and durability of every build.' },
  { title: 'Timely Project Delivery', description: 'Strict timeline tracking and resource scheduling to hand over projects on schedule without compromising on quality.' },
  { title: 'Competitive Pricing', description: 'Transparent cost estimations and optimized procurement networks that deliver high-value results within your budget.' },
  { title: 'Client-Focused Approach', description: 'Tailoring every phase from design to finishing to meet your specific operational needs and aesthetic preferences.' },
  { title: 'Proven Track Record', description: 'Decades of reliable construction excellence with successfully completed projects across Pakistan.' },
] as const;

export const CORE_VALUES = [
  { title: 'Integrity', description: 'Transparent and ethical practices in all our dealings, timelines, and communications.', icon: 'shield' },
  { title: 'Innovation', description: 'Adopting modern technologies and smart automation solutions to build for the future.', icon: 'lightbulb' },
  { title: 'Sustainability', description: 'Environmentally responsible construction and energy-efficient building methods.', icon: 'leaf' },
  { title: 'Quality', description: 'High construction standards and durable results that stand the test of time.', icon: 'star' },
  { title: 'Client Focus', description: 'Delivering according to client needs with tailored execution and absolute clarity.', icon: 'users' },
] as const;

export const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    quote: 'Buildora delivered our project on time with exceptional quality. Their attention to detail in the finishing work was outstanding.',
    name: 'Buildora Client',
    role: 'Residential Project, Pakistan',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quote: 'Professional team, transparent communication, and premium execution. We could not have asked for a better construction partner.',
    name: 'Buildora Client',
    role: 'Commercial Project, Pakistan',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    quote: 'The smart home automation integration was seamless. Buildora understands modern living and delivers on every promise.',
    name: 'Buildora Client',
    role: 'Hospitality Project, Pakistan',
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Which construction services does Buildora provide?',
    answer: 'Buildora provides construction, interior fit-out, renovation, development, and project management services for residential, commercial, hospitality, banking, and mixed-use projects across Pakistan.',
  },
  {
    question: 'Does Buildora work outside Lahore?',
    answer: 'Yes. Buildora is based in Lahore and serves clients across Pakistan.',
  },
  {
    question: 'What is Buildora’s operational track record?',
    answer: 'Buildora is a trusted construction and development firm based in Lahore, executing diverse residential, commercial, hospitality, and banking sector projects across Pakistan.',
  },
  {
    question: 'Does Buildora handle commercial construction projects?',
    answer: 'Yes. Buildora has experience in commercial, restaurant, banking, hospitality, residential, and development projects.',
  },
  {
    question: 'Does Buildora provide interior fit-out services?',
    answer: 'Yes. Buildora provides interior execution, renovation, finishing, fit-out, and turnkey solutions for commercial and residential spaces.',
  },
  {
    question: 'How can I book a consultation with Buildora?',
    answer: 'You can contact Buildora through the website form, phone, email, or WhatsApp to discuss your project requirements.',
  },
] as const;
