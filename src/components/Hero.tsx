import Image from 'next/image'

const SPECIALTIES = [
  'Automatización de procesos empresariales con IA',
  'Integración de APIs y plataformas Meta',
  'Mensajería empresarial a escala (WhatsApp Business API)',
  'Infraestructura cloud y administración de servidores',
  'Desarrollo de agentes autónomos e IA conversacional',
  'Sistemas white-label para agencias y revendedores',
]

const BADGES = [
  'META TECH PROVIDER',
  'AUTOMATION INFRASTRUCTURE ARCHITECT',
  'WHITE-LABEL SYSTEMS ENGINEER',
]

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
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center pt-36 lg:pt-44 pb-16">
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

        {/* Founder biography */}
        <div
          className="glass-card w-full max-w-5xl mx-auto p-8 md:p-12"
          style={{ textAlign: 'left' }}
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start">

            {/* Photo column */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  width: '220px',
                  height: '260px',
                  border: '1px solid rgba(0,212,255,0.25)',
                  boxShadow: '0 0 40px rgba(0,212,255,0.1)',
                }}
              >
                <Image
                  src="/perfil.png"
                  alt="Isaac Arias — Fundador de Car Tech Flow"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
                {/* Cyan overlay line */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #00D4FF, transparent)' }}
                />
              </div>

              {/* Badges */}
              <div className="flex flex-col gap-2 w-full">
                {BADGES.map((badge) => (
                  <div
                    key={badge}
                    className="text-center px-3 py-1 rounded"
                    style={{
                      background: 'rgba(0,212,255,0.05)',
                      border: '1px solid rgba(0,212,255,0.2)',
                      fontFamily: 'var(--font-orbitron), sans-serif',
                      fontSize: '0.52rem',
                      letterSpacing: '0.1em',
                      color: '#00D4FF',
                    }}
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Bio column */}
            <div className="flex-1 min-w-0">
              {/* Name & title */}
              <div className="mb-6">
                <h2
                  className="text-white font-black text-3xl md:text-4xl mb-1"
                  style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                >
                  Isaac Arias
                </h2>
                <p
                  className="gradient-text font-bold text-sm tracking-widest"
                  style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '0.7rem' }}
                >
                  Ingeniero en Informática | Meta Tech Provider | Fundador de Car Tech Flow
                </p>
              </div>

              {/* Bio text */}
              <div className="flex flex-col gap-4 mb-8">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Soy Ingeniero en Informática con más de 5 años de experiencia construyendo infraestructura tecnológica para empresas que quieren crecer sin límites. Me especializo en el diseño e implementación de sistemas de automatización con inteligencia artificial, integración de APIs empresariales y arquitecturas escalables en la nube.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Fundé <span className="text-[#00D4FF] font-semibold">Car Tech Flow</span> con una visión clara: democratizar el acceso a tecnología de alto nivel para negocios de todos los tamaños. Trabajo directamente con cada cliente para identificar sus cuellos de botella operativos y convertirlos en sistemas inteligentes que funcionan solos, 24/7.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Como proveedor tecnológico acreditado por Meta, tengo acceso a infraestructura y herramientas empresariales que permiten implementar soluciones de mensajería, automatización y gestión de datos a escala real. También desarrollo sistemas <span className="text-[#00D4FF] font-semibold">white-label</span> que permiten a otras agencias ofrecer mis soluciones como propias.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Mi enfoque es siempre técnico, directo y orientado a resultados: menos teoría, más sistemas funcionando.
                </p>
              </div>

              {/* Specialties */}
              <div>
                <h3
                  className="text-white font-bold mb-4"
                  style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  Especialidades
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SPECIALTIES.map((s) => (
                    <div key={s} className="flex items-start gap-2">
                      <span className="text-[#00D4FF] mt-0.5 flex-shrink-0" style={{ fontSize: '0.6rem' }}>▸</span>
                      <span className="text-gray-400 text-xs leading-relaxed">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
