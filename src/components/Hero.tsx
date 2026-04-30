export default function Hero() {
  return (
    <section
      className="scanline-wrap relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0F' }}
    >
      {/* Animated cyber grid */}
      <div className="cyber-grid absolute inset-0 opacity-70" />

      {/* Radial glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          left: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%',
          right: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-16">
        {/* Pre-label */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ border: '1px solid rgba(0,212,255,0.25)', background: 'rgba(0,212,255,0.05)' }}>
          <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-glow-pulse" />
          <span className="section-label text-xs">Automatización con Inteligencia Artificial</span>
        </div>

        {/* Main heading */}
        <h1
          className="font-black leading-tight mb-6"
          style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: 'clamp(2rem, 6vw, 5rem)' }}
        >
          <span className="text-white block">EL FUTURO DE TU</span>
          <span className="gradient-text block">EMPRESA ES LA IA</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos negocios con automatización inteligente, agentes autónomos e integración de IA.
          Resultados medibles desde la primera semana.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#contacto" className="btn-cyber">
            Automatiza Tu Negocio
          </a>
          <a href="#servicios" className="btn-outline">
            Ver Servicios
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16">
          {[
            { value: '10x', label: 'Más Productividad' },
            { value: '60%', label: 'Reducción de Costos' },
            { value: '24/7', label: 'Operación Continua' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="gradient-text font-black text-2xl md:text-3xl"
                style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden glow-border" style={{ aspectRatio: '16/9' }}>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            style={{ background: 'rgba(13,13,24,0.9)' }}
          >
            {/* Play icon ring */}
            <div
              className="animate-glow-pulse flex items-center justify-center rounded-full"
              style={{
                width: '72px',
                height: '72px',
                border: '2px solid rgba(0,212,255,0.4)',
                background: 'rgba(0,212,255,0.05)',
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  borderLeft: '20px solid rgba(0,212,255,0.6)',
                  marginLeft: '4px',
                }}
              />
            </div>
            <p
              className="section-label"
              style={{ fontSize: '0.65rem', color: 'rgba(0,212,255,0.5)' }}
            >
              VIDEO PLACEHOLDER · SEEDANCE 2.0 · PRÓXIMAMENTE
            </p>
            <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.7rem' }}>1920 × 1080 · 5 sec loop</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <div className="w-px h-10 bg-gradient-to-b from-[#00D4FF] to-transparent" />
        <span className="section-label" style={{ fontSize: '0.55rem' }}>Scroll</span>
      </div>
    </section>
  )
}
