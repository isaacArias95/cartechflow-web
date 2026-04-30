'use client'

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'

export default function Process() {
  return (
    <section id="proceso" className="relative py-24 px-4" style={{ background: '#0A0A0F' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-label block mb-3">Metodología</span>
          <h2
            className="section-title text-3xl md:text-4xl font-black"
            style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
          >
            Cómo Trabajamos
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Un proceso estructurado y transparente para llevar tu negocio al siguiente nivel con IA.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line on desktop */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: '40px',
              left: '12.5%',
              width: '75%',
              height: '1px',
              background: 'linear-gradient(90deg, rgba(0,212,255,0.2), rgba(0,102,255,0.2))',
            }}
          />

          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div
                className="animate-glow-pulse flex items-center justify-center rounded-full mb-6 z-10"
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(0,212,255,0.05)',
                  border: '2px solid rgba(0,212,255,0.4)',
                  flexShrink: 0,
                }}
              >
                <span
                  className="text-[#00D4FF] font-black"
                  style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '1.1rem' }}
                >
                  {step.number}
                </span>
              </div>

              {/* Step content */}
              <h3
                className="text-white font-bold mb-3"
                style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '0.9rem', letterSpacing: '0.05em' }}
              >
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a href="#contacto" className="btn-cyber">
            Iniciar Mi Transformación
          </a>
        </motion.div>
      </div>
    </section>
  )
}
