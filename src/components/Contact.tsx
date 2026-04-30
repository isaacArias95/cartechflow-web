'use client'

import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log('Contact form submission:', form)
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="relative py-24 px-4" style={{ background: '#0A0A0F' }}>
      {/* Glow accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(0,102,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-label block mb-3">Hablemos</span>
          <h2
            className="section-title text-3xl md:text-4xl font-black"
            style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
          >
            Agenda Tu Consulta
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Cuéntanos sobre tu negocio y te mostramos cómo la IA puede transformarlo.
            Primera consulta sin costo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h3
              className="text-white font-bold text-xl mb-6"
              style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '1rem' }}
            >
              ¿Por qué elegir CARTECHFLOW?
            </h3>
            <div className="flex flex-col gap-5">
              {[
                { icon: '⚡', title: 'Resultados rápidos', desc: 'Primeros resultados visibles en menos de 2 semanas.' },
                { icon: '🎯', title: 'Enfoque personalizado', desc: 'Cada solución es diseñada 100% a la medida de tu negocio.' },
                { icon: '🔒', title: 'Seguridad garantizada', desc: 'Tus datos y procesos están protegidos con los más altos estándares.' },
                { icon: '📊', title: 'ROI medible', desc: 'Métricas claras de impacto desde el primer día de implementación.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="flex items-center justify-center rounded-lg flex-shrink-0 text-lg"
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'rgba(0,212,255,0.07)',
                      border: '1px solid rgba(0,212,255,0.15)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold mb-1">{item.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10 text-center">
                <div className="text-4xl">✅</div>
                <h3
                  className="gradient-text font-black text-xl"
                  style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                >
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-400 text-sm">
                  Nos pondremos en contacto contigo en menos de 24 horas.
                </p>
                <button
                  className="btn-outline mt-4"
                  style={{ fontSize: '0.7rem', padding: '10px 24px' }}
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', message: '' }) }}
                >
                  Enviar Otro Mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label text-xs block mb-2">Nombre *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="cyber-input"
                    />
                  </div>
                  <div>
                    <label className="section-label text-xs block mb-2">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@empresa.com"
                      className="cyber-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="section-label text-xs block mb-2">Empresa</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="cyber-input"
                  />
                </div>

                <div>
                  <label className="section-label text-xs block mb-2">Servicio de interés</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="cyber-input"
                  >
                    <option value="" style={{ background: '#0D0D18' }}>Selecciona un servicio</option>
                    <option value="automatizacion" style={{ background: '#0D0D18' }}>Automatización con IA</option>
                    <option value="agentes" style={{ background: '#0D0D18' }}>Agentes Inteligentes</option>
                    <option value="integracion" style={{ background: '#0D0D18' }}>Integración de IA</option>
                    <option value="estrategia" style={{ background: '#0D0D18' }}>Estrategia IA</option>
                  </select>
                </div>

                <div>
                  <label className="section-label text-xs block mb-2">Mensaje *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu negocio y lo que quieres automatizar..."
                    className="cyber-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-cyber w-full text-center" style={{ marginTop: '4px' }}>
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
