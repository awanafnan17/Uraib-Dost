'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectImageCollageProps {
  mainImage: string;
  mainAlt: string;
  secondaryImage: string;
  secondaryAlt: string;
  tertiaryImage?: string;
  tertiaryAlt?: string;
  label?: string;
  caption?: string;
}

export default function ProjectImageCollage({
  mainImage,
  mainAlt,
  secondaryImage,
  secondaryAlt,
  tertiaryImage,
  tertiaryAlt,
  label,
  caption,
}: ProjectImageCollageProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: tertiaryImage ? '1fr 1fr' : '1fr',
        gap: '12px',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Main image — spans 2 rows on left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          gridColumn: '1 / 2',
          gridRow: tertiaryImage ? '1 / 3' : '1 / 2',
          position: 'relative',
          borderRadius: '28px',
          overflow: 'hidden',
          minHeight: '340px',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
        }}
      >
        <Image
          src={mainImage}
          alt={mainAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(5,5,5,0.55), transparent 50%)',
          }}
        />
        {/* Label pill */}
        {label && (
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              zIndex: 2,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '7px 18px',
                borderRadius: '999px',
                background: 'rgba(5,5,5,0.55)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                color: '#C8A45D',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600,
                border: '1px solid rgba(200,164,93,0.25)',
              }}
            >
              {label}
            </span>
            {caption && (
              <span
                style={{
                  display: 'inline-block',
                  padding: '5px 14px',
                  borderRadius: '999px',
                  background: 'rgba(5,5,5,0.45)',
                  backdropFilter: 'blur(12px)',
                  color: 'rgba(240,236,227,0.7)',
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                {caption}
              </span>
            )}
          </div>
        )}
      </motion.div>

      {/* Secondary image — top right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          gridColumn: '2 / 3',
          gridRow: '1 / 2',
          position: 'relative',
          borderRadius: '28px',
          overflow: 'hidden',
          minHeight: tertiaryImage ? '160px' : '340px',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
        }}
      >
        <Image
          src={secondaryImage}
          alt={secondaryAlt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(5,5,5,0.35), transparent 50%)',
          }}
        />
      </motion.div>

      {/* Tertiary image — bottom right */}
      {tertiaryImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            gridColumn: '2 / 3',
            gridRow: '2 / 3',
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            minHeight: '160px',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
          }}
        >
          <Image
            src={tertiaryImage}
            alt={tertiaryAlt || ''}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(5,5,5,0.35), transparent 50%)',
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
