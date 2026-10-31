'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-brand-black flex items-center justify-center"
        >
          <div className="text-center">
            {/* Text wordmark — no dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
              className="flex items-baseline justify-center gap-0"
            >
              <span className="font-heading text-[44px] md:text-[56px] tracking-[0.06em] text-brand-white">BUILDORA</span>
            </motion.div>

            {/* Line animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="mx-auto mt-5 w-48 origin-center"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-4 text-[11px] tracking-[0.25em] uppercase text-brand-silver/50 font-body"
            >
              Build. Finish. Furnish.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
