'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PremiumButton from '@/components/ui/PremiumButton';
import { BRAND, SERVICES } from '@/lib/constants';

const CONTACT_CARDS = [
  {
    label: 'Visit Us',
    value: BRAND.address,
    icon: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
  },
  {
    label: 'Email Us',
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    icon: 'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75',
  },
  {
    label: 'Call Us',
    value: BRAND.phone.join(' / '),
    href: `tel:${BRAND.phone[0]}`,
    icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z',
  },
  {
    label: 'Working Hours',
    value: 'Mon to Sat: 9 AM to 6 PM',
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
];

export default function ContactPageContent() {
  const usesEmailDraft = process.env.NEXT_PUBLIC_CONTACT_MODE === 'mailto';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', phone: '', email: '', projectType: '', city: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (honeypot) return;
    if (!validate()) return;
    
    setLoading(true);
    setSubmitError(false);

    if (usesEmailDraft) {
      const subject = `Buildora project inquiry from ${form.name}`;
      const body = [
        `Name: ${form.name}`,
        `Phone: ${form.phone || 'Not provided'}`,
        `Email: ${form.email}`,
        `Project type: ${form.projectType || 'Not selected'}`,
        `City: ${form.city || 'Not provided'}`,
        '',
        form.message,
      ].join('\n');
      window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setLoading(false);
      return;
    }
    
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [ev.target.name]: ev.target.value }));
    if (errors[ev.target.name]) setErrors((p) => { const n = { ...p }; delete n[ev.target.name]; return n; });
  };

  return (
    <div ref={ref} className="navbar-clearance pb-0">
      {/* Page Hero with background image */}
      <section 
        className="navbar-clearance section-spacing relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url("/images/projects/d-heights.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(15%)',
          marginTop: '-120px' // adjust for clearance nesting
        }}
      >
        <div className="absolute inset-0 arch-grid opacity-15 pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="d-flex align-items-center gap-3 mb-4"
          >
            <div className="w-10 h-px bg-white/40" />
            <span className="font-accent italic text-brand-silver text-lg">Get in Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-display text-brand-white max-w-3xl"
          >
            START YOUR PROJECT WITH BUILDORA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-brand-silver text-body-lg max-w-xl leading-relaxed"
          >
            Tell us about your construction, interior fit-out, or development requirement. Based in Lahore, we deliver premium solutions across Pakistan.
          </motion.p>
        </div>
      </section>

      {/* Form + Contact Cards */}
      <section className="container mt-5 pt-4">
        <div className="row g-5">
          {/* Form */}
          <div className="col-12 col-lg-8">
            {submitted ? (
              <div className="glass-form rounded-[28px] p-5 d-flex align-items-center justify-center min-h-[500px]">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-white/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-brand-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl text-brand-white tracking-wider mb-4">INQUIRY SENT</h3>
                  <p className="text-brand-muted text-body-lg">Thank you. Your inquiry has been received. Our team will contact you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-form rounded-[28px]">
                <h2 className="font-heading text-2xl md:text-3xl text-brand-white tracking-wider mb-2">PROJECT INQUIRY</h2>
                <p className="text-brand-muted text-sm mb-4">Fields marked with * are required</p>

                {/* Honeypot */}
                <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="absolute opacity-0 pointer-events-none h-0 w-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                {submitError && (
                  <div className="mb-4 p-4 rounded-[14px] bg-red-950/30 border border-red-500/20 text-red-400 text-sm">
                    Sorry, something went wrong. Please try again or contact us on WhatsApp.
                  </div>
                )}

                <div className="row g-4">
                  {/* Name */}
                  <div className="col-md-6">
                    <label htmlFor="name" className="block text-[12px] tracking-[0.15em] uppercase text-brand-silver mb-2">Full Name *</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" className={`input-premium rounded-[14px] ${errors.name ? 'border-red-500/50' : ''}`} disabled={loading} />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  {/* Phone */}
                  <div className="col-md-6">
                    <label htmlFor="phone" className="block text-[12px] tracking-[0.15em] uppercase text-brand-silver mb-2">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+92 XXX XXXXXXX" className="input-premium rounded-[14px]" disabled={loading} />
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="block text-[12px] tracking-[0.15em] uppercase text-brand-silver mb-2">Email Address *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={`input-premium rounded-[14px] ${errors.email ? 'border-red-500/50' : ''}`} disabled={loading} />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                  {/* Project Type */}
                  <div className="col-md-6">
                    <label htmlFor="projectType" className="block text-[12px] tracking-[0.15em] uppercase text-brand-silver mb-2">Project Type</label>
                    <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange} className={`input-premium rounded-[14px] ${!form.projectType ? 'text-brand-muted' : ''}`} style={{ background: '#0D0D0D' }} disabled={loading}>
                      <option value="">Select project type</option>
                      {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.shortTitle}</option>)}
                    </select>
                  </div>

                  {/* City */}
                  <div className="col-12">
                    <label htmlFor="city" className="block text-[12px] tracking-[0.15em] uppercase text-brand-silver mb-2">City</label>
                    <input id="city" name="city" type="text" value={form.city} onChange={handleChange} placeholder="e.g. Lahore, Karachi, Islamabad" className="input-premium rounded-[14px]" disabled={loading} />
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label htmlFor="message" className="block text-[12px] tracking-[0.15em] uppercase text-brand-silver mb-2">Project Details *</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project requirements, timeline, and budget range..." rows={5} className={`input-premium rounded-[14px] resize-none ${errors.message ? 'border-red-500/50' : ''}`} disabled={loading} />
                    {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <div className="col-12 mt-4 pt-2">
                    <PremiumButton
                      label={loading ? 'Sending...' : usesEmailDraft ? 'Prepare Email Inquiry' : 'Send Project Inquiry'}
                      type="submit"
                      variant="primary"
                      size="large"
                      className="w-full md:w-auto"
                      disabled={loading}
                    />
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Contact Cards */}
          <div className="col-12 col-lg-4 d-flex flex-column gap-4">
            {CONTACT_CARDS.map((card, i) => (
              <div key={i} className="glass-card rounded-[20px] p-6 group" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="d-flex align-items-start gap-4">
                  <div className="w-11 h-11 flex-shrink-0 rounded-[12px] border border-brand-steel/30 d-flex align-items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-brand-muted mb-1.5">{card.label}</p>
                    {card.href ? (
                      <a href={card.href} className="text-[15px] text-brand-cream hover:text-brand-white transition-colors leading-relaxed">{card.value}</a>
                    ) : (
                      <p className="text-[15px] text-brand-cream leading-relaxed">{card.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mt-5 pb-5">
        <div className="glass-panel rounded-[24px] overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="p-4 p-md-5 border-b border-white/[0.04] d-flex align-items-center justify-between">
            <div className="d-flex align-items-center gap-3">
              <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span className="font-heading text-lg tracking-wider text-brand-white">OUR LOCATION</span>
            </div>
            <span className="text-sm text-brand-muted d-none d-md-block">DHA Phase 6, Lahore, Pakistan</span>
          </div>
          <div className="ratio ratio-21x9 bg-brand-graphite">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.354636788072!2d74.37!3d31.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042e902375cb%3A0xb8c0a6e8db4cbebf!2sDHA%20Phase%206%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1"
              style={{ border: 0, filter: 'saturate(0.3) brightness(0.7) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Buildora Location, DHA Phase 6, Lahore"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
