'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 px-4" style={{ background: '#0D0D18' }}>
      {/* Subtle grid overlay */}
      <div className="cyber-grid absolute inset-0 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-label block mb-3">Lo que hacemos</span>
          <h2
            className="section-title text-3xl md:text-4xl font-black"
            style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
          >
            Nuestros Servicios
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Soluciones de inteligencia artificial diseñadas para transformar y escalar tu negocio de forma medible.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col"
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center text-2xl mb-6 rounded-xl"
                style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.2)',
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-white font-bold text-base mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '0.85rem' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>

              {/* Tag */}
              <div className="mt-6">
                <span
                  className="inline-block px-3 py-1 text-[#00D4FF] rounded-full"
                  style={{
                    background: 'rgba(0,102,255,0.1)',
                    border: '1px solid rgba(0,102,255,0.3)',
                    fontFamily: 'var(--font-orbitron), sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  {service.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
