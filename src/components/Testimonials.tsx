'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 px-4" style={{ background: '#0D0D18' }}>
      {/* Subtle grid */}
      <div className="cyber-grid absolute inset-0 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-label block mb-3">Resultados Reales</span>
          <h2
            className="section-title text-3xl md:text-4xl font-black"
            style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
          >
            Lo Que Dicen Nuestros Clientes
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-card p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#00D4FF] text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(0,212,255,0.1)' }}>
                <div
                  className="flex items-center justify-center rounded-full font-black text-black flex-shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                    fontFamily: 'var(--font-orbitron), sans-serif',
                    fontSize: '0.85rem',
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
