import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | CARTECHFLOW',
  description: 'Aviso de privacidad integral de CAR TECH FLOW conforme a la Ley Federal de Protección de Datos Personales en México.',
}

const sections = [
  {
    title: '1. Identidad y domicilio del responsable',
    content: `CAR TECH FLOW, con domicilio en México, es responsable del tratamiento, uso y protección de los datos personales que recabamos de nuestros clientes, prospectos, usuarios, aliados comerciales y proveedores.

Para cualquier asunto relacionado con este Aviso de Privacidad, puede contactarnos mediante:
• Correo electrónico: contacto@cartechflow.com
• Sitio web: www.cartechflow.cloud`,
  },
  {
    title: '2. Datos personales que recabamos',
    content: `Para la prestación de nuestros servicios tecnológicos, podremos recabar de manera directa o indirecta los siguientes datos personales:

**Datos de identificación:**
• Nombre completo
• Nombre comercial o razón social
• Cargo o puesto
• Firma autógrafa o electrónica

**Datos de contacto:**
• Correo electrónico
• Número telefónico
• Dirección comercial o fiscal

**Datos fiscales y administrativos:**
• RFC
• Constancia de situación fiscal
• Datos de facturación

**Datos técnicos y operativos:**
• Identificadores de cuentas empresariales
• Tokens de acceso y credenciales técnicas autorizadas
• Información de integración tecnológica
• Logs de actividad y configuraciones de sistemas
• Información de cuentas vinculadas a plataformas digitales

**Datos de mensajería y plataformas:**
Cuando el cliente autorice la integración con plataformas de mensajería o automatización, podremos procesar información vinculada a servicios como WhatsApp Business, APIs de Meta y otras herramientas tecnológicas necesarias para la prestación del servicio.`,
  },
  {
    title: '3. Finalidades del tratamiento',
    content: `Los datos personales serán utilizados para las siguientes finalidades primarias:
• Prestar servicios de consultoría tecnológica
• Implementación de automatización empresarial
• Integración y administración de APIs y servicios digitales
• Configuración de cuentas empresariales de mensajería
• Soporte técnico especializado
• Gestión contractual, administrativa y fiscal
• Verificación de identidad y autorización de accesos
• Cumplimiento de obligaciones legales y contractuales

**Finalidades secundarias:**
Adicionalmente, podremos utilizar sus datos para:
• Envío de información comercial
• Invitaciones a capacitaciones o eventos
• Actualizaciones de servicios y productos
• Estudios internos de calidad y mejora continua

En caso de no desear el tratamiento para finalidades secundarias, podrá solicitarlo mediante correo electrónico.`,
  },
  {
    title: '4. Uso de plataformas de terceros',
    content: `CAR TECH FLOW presta servicios de integración tecnológica mediante plataformas de terceros, incluyendo herramientas empresariales operadas por Meta.

Como proveedor tecnológico acreditado, CAR TECH FLOW podrá gestionar configuraciones, integraciones y conexiones autorizadas por el cliente dentro de dichas plataformas.

El tratamiento de información dentro de dichas plataformas también podrá estar sujeto a los términos, políticas y avisos de privacidad de sus respectivos proveedores.`,
  },
  {
    title: '5. Transferencia de datos personales',
    content: `CAR TECH FLOW podrá transferir datos personales sin requerir consentimiento adicional en los casos permitidos por la legislación mexicana, incluyendo:
• Autoridades competentes
• Proveedores de infraestructura tecnológica
• Plataformas de mensajería empresarial
• Proveedores cloud y servicios de seguridad digital
• Socios tecnológicos necesarios para la correcta prestación del servicio

Toda transferencia se realizará bajo medidas de seguridad y confidencialidad adecuadas.`,
  },
  {
    title: '6. Medidas de seguridad',
    content: `CAR TECH FLOW implementa medidas administrativas, técnicas y físicas para proteger la información personal contra daño, pérdida, alteración, destrucción o uso no autorizado.`,
  },
  {
    title: '7. Derechos ARCO',
    content: `Usted tiene derecho a:
• Acceder a sus datos personales
• Rectificar información incorrecta
• Cancelar sus datos cuando legalmente proceda
• Oponerse al tratamiento de los mismos

Para ejercer sus derechos ARCO, deberá enviar una solicitud al correo: contacto@cartechflow.com.

La solicitud deberá contener:
• Nombre del titular
• Medio de contacto
• Documentación que acredite identidad
• Descripción clara de la solicitud`,
  },
  {
    title: '8. Revocación del consentimiento',
    content: `Usted podrá revocar el consentimiento otorgado para el tratamiento de sus datos personales en cualquier momento, sujeto a obligaciones legales o contractuales vigentes.`,
  },
  {
    title: '9. Uso de cookies y tecnologías de seguimiento',
    content: `En nuestros sitios web, plataformas o aplicaciones podrán utilizarse cookies, píxeles, webhooks, logs y tecnologías de seguimiento con fines operativos, analíticos y de seguridad.`,
  },
  {
    title: '10. Modificaciones al aviso de privacidad',
    content: `CAR TECH FLOW se reserva el derecho de modificar el presente Aviso de Privacidad en cualquier momento para adaptarlo a cambios legales, regulatorios o tecnológicos.

Las actualizaciones estarán disponibles en www.cartechflow.cloud`,
  },
  {
    title: '11. Consentimiento',
    content: `Al contratar nuestros servicios, utilizar nuestras plataformas o compartir información con CAR TECH FLOW, usted reconoce haber leído y aceptado el presente Aviso de Privacidad.`,
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

export default function AvisoDePrivacidad() {
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
            Aviso de <span className="gradient-text">Privacidad Integral</span>
          </h1>
          <p className="text-gray-500 text-sm">
            En cumplimiento con la <strong className="text-gray-400">Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong> de los Estados Unidos Mexicanos.
          </p>
          <p className="text-gray-600 text-xs mt-2">Última actualización: 2025</p>
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
            En cumplimiento con lo establecido por la <strong className="text-gray-300">Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>, su Reglamento y demás disposiciones aplicables en los Estados Unidos Mexicanos, <strong className="text-[#00D4FF]">Car Tech Flow</strong> (en adelante "CAR TECH FLOW"), pone a disposición el presente Aviso de Privacidad.
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
            Para más información visita{' '}
            <a href="https://cartechflow.cloud" className="text-[#00D4FF] hover:text-white transition-colors">
              www.cartechflow.cloud
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
