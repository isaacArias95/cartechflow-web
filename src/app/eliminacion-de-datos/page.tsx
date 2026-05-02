import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Eliminación de Datos | CARTECHFLOW',
  description: 'Política de Eliminación de Datos de CAR TECH FLOW conforme a la legislación mexicana y lineamientos de plataformas tecnológicas.',
}

const sections = [
  {
    title: '1. Derecho de eliminación',
    content: `Cualquier titular de datos personales podrá solicitar la eliminación total o parcial de su información almacenada por CAR TECH FLOW.

Esto incluye, entre otros:
• Datos de contacto
• Información empresarial
• Registros de soporte
• Credenciales técnicas autorizadas
• Tokens temporales de integración
• Logs operativos
• Información relacionada con integraciones tecnológicas`,
  },
  {
    title: '2. Cómo solicitar la eliminación',
    content: `Para solicitar la eliminación de datos, el titular deberá enviar una solicitud a:

**Correo electrónico:** contacto@cartechflow.cloud
**Asunto:** Solicitud de Eliminación de Datos

La solicitud deberá incluir:
• Nombre completo o razón social
• Correo asociado a la cuenta o servicio
• Descripción de la información a eliminar
• Documentación que acredite identidad o representación legal, cuando aplique`,
  },
  {
    title: '3. Tiempo de respuesta',
    content: `CAR TECH FLOW analizará y procesará la solicitud dentro de un plazo máximo de **20 días hábiles**, conforme a la legislación mexicana aplicable.

Una vez aprobada la solicitud, la eliminación se realizará en un plazo máximo de **15 días hábiles adicionales**, salvo obligaciones legales, fiscales, contractuales o de seguridad que requieran conservación temporal.`,
  },
  {
    title: '4. Excepciones',
    content: `CAR TECH FLOW podrá conservar información cuando sea necesario para:
• Cumplimiento de obligaciones fiscales o legales
• Prevención de fraude o incidentes de seguridad
• Cumplimiento contractual vigente
• Auditorías técnicas o regulatorias
• Resolución de disputas`,
  },
  {
    title: '5. Eliminación en plataformas de terceros',
    content: `Cuando los datos estén vinculados a plataformas externas (incluyendo APIs, servicios cloud o plataformas de Meta), CAR TECH FLOW eliminará los datos bajo su control directo.

Los datos administrados por terceros estarán sujetos a las políticas de privacidad y eliminación de dichos proveedores.`,
  },
  {
    title: '6. Confirmación de eliminación',
    content: `Una vez concluido el proceso, el solicitante recibirá una confirmación oficial mediante correo electrónico.`,
  },
  {
    title: '7. Contacto',
    content: `Para cualquier solicitud relacionada con privacidad o eliminación de datos:

**CAR TECH FLOW**
Correo: contacto@cartechflow.cloud
Sitio web: www.cartechflow.cloud`,
  },
]

function renderContent(text: string) {
  return text.split('\n').map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return (
        <p key={i} className="font-semibold text-[#00D4FF] mt-4 mb-1" style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          {line.replace(/\*\*/g, '')}
        </p>
      )
    }
    if (line.includes('**')) {
      const parts = line.split(/\*\*(.*?)\*\*/)
      return (
        <p key={i} className="text-gray-400 text-sm leading-relaxed">
          {parts.map((part, j) =>
            j % 2 === 1
              ? <strong key={j} className="text-gray-200">{part}</strong>
              : part
          )}
        </p>
      )
    }
    if (line.startsWith('•')) {
      return (
        <p key={i} className="text-gray-400 text-sm pl-4 leading-relaxed">
          {line}
        </p>
      )
    }
    if (line === '') return <br key={i} />
    return <p key={i} className="text-gray-400 text-sm leading-relaxed">{line}</p>
  })
}

export default function EliminacionDeDatos() {
  return (
    <main style={{ background: '#0A0A0F', minHeight: '100vh' }}>
      <Navbar />

      {/* Page header */}
      <div className="relative pt-32 pb-12 px-4 text-center scanline-wrap" style={{ borderBottom: '1px solid rgba(0,212,255,0.1)' }}>
        <div className="cyber-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="section-label block mb-3">Legal</span>
          <h1
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
          >
            Política de <span className="gradient-text">Eliminación de Datos</span>
          </h1>
          <p className="text-gray-500 text-sm">
            En cumplimiento con la legislación aplicable en México y los lineamientos de plataformas tecnológicas con las que opera <strong className="text-gray-400">CAR TECH FLOW</strong>.
          </p>
          <p className="text-gray-600 text-xs mt-2">Última actualización: 30 de abril de 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#00D4FF] text-sm mb-12 hover:text-white transition-colors"
          style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          ← Regresar al inicio
        </Link>

        {/* Intro */}
        <div className="glass-card p-8 mb-8">
          <p className="text-gray-400 text-sm leading-relaxed">
            En <strong className="text-[#00D4FF]">CAR TECH FLOW</strong>, respetamos el derecho de nuestros clientes, usuarios y socios comerciales a solicitar la eliminación de su información personal y técnica, de conformidad con la legislación aplicable en México y los lineamientos de plataformas tecnológicas con las que operamos.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-6">
          {sections.map((section) => (
            <div key={section.title} className="glass-card p-8">
              <h2
                className="text-white font-bold mb-4 pb-3"
                style={{
                  fontFamily: 'var(--font-orbitron), sans-serif',
                  fontSize: '0.85rem',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid rgba(0,212,255,0.15)',
                }}
              >
                {section.title}
              </h2>
              <div className="flex flex-col gap-1">
                {renderContent(section.content)}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-xs">
            Para solicitar eliminación de datos escríbenos a{' '}
            <a href="mailto:contacto@cartechflow.cloud" className="text-[#00D4FF] hover:text-white transition-colors">
              contacto@cartechflow.cloud
            </a>
          </p>
          <Link
            href="/"
            className="btn-outline inline-block mt-6"
            style={{ fontSize: '0.7rem', padding: '10px 28px' }}
          >
            Volver al inicio
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
