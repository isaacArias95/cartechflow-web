import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | CARTECHFLOW',
  description: 'Términos y Condiciones de Servicio de CAR TECH FLOW para servicios tecnológicos, consultoría y automatización empresarial.',
}

const sections = [
  {
    title: '1. Identificación del prestador de servicios',
    content: `CAR TECH FLOW (en adelante "EL PRESTADOR"), con domicilio en Av. Toledo 189, Hacienda Santa Fe, Tlajomulco de Zúñiga, Jalisco, México, presta servicios especializados de:
• Consultoría tecnológica
• Automatización de procesos empresariales
• Integración de APIs
• Implementación de mensajería empresarial
• Desarrollo e implementación de soluciones digitales
• Soporte técnico especializado
• Administración de infraestructura tecnológica`,
  },
  {
    title: '2. Definiciones',
    content: `**Cliente:** Persona física o moral que contrata servicios de CAR TECH FLOW.

**Servicios:** Cualquier solución tecnológica, consultoría, implementación, soporte, integración o automatización ofrecida por EL PRESTADOR.

**Plataformas de terceros:** Sistemas, software, APIs, servicios cloud o plataformas externas utilizadas dentro de los proyectos.

**Credenciales de acceso:** Tokens, usuarios, contraseñas, llaves API, permisos administrativos o cualquier mecanismo de autenticación.`,
  },
  {
    title: '3. Objeto del servicio',
    content: `CAR TECH FLOW proporcionará al cliente los servicios previamente cotizados, contratados o formalizados mediante propuesta comercial, contrato, orden de servicio, factura, correo electrónico o cualquier medio digital autorizado.

El alcance específico de cada proyecto será definido por escrito.

Cualquier actividad no contemplada dentro del alcance contratado podrá generar costos adicionales.`,
  },
  {
    title: '4. Obligaciones del cliente',
    content: `El cliente se obliga a:
• Proporcionar información veraz, actualizada y suficiente.
• Entregar accesos técnicos necesarios para la implementación.
• Contar con autorización legal sobre las cuentas, dominios, plataformas o activos digitales involucrados.
• Cubrir los pagos conforme a lo pactado.
• Designar responsables internos para validaciones y aprobaciones.

El cliente será responsable de la veracidad y legalidad del uso de sus cuentas empresariales.`,
  },
  {
    title: '5. Uso de plataformas de terceros',
    content: `Los servicios podrán involucrar integración con plataformas de terceros, incluyendo servicios operados por Meta, proveedores cloud, CRM, sistemas de automatización y servicios de mensajería empresarial.

CAR TECH FLOW actúa como integrador tecnológico y proveedor de implementación, sin ser propietario ni controlador de dichas plataformas.

La continuidad del servicio podrá depender de políticas, cambios técnicos, restricciones, suspensiones o decisiones de dichos terceros.

CAR TECH FLOW no garantiza la disponibilidad permanente de servicios administrados por terceros.`,
  },
  {
    title: '6. Accesos y credenciales',
    content: `El cliente podrá proporcionar accesos técnicos para la implementación del servicio.

CAR TECH FLOW se compromete a:
• Utilizar los accesos exclusivamente para fines del proyecto.
• Implementar medidas razonables de seguridad.
• Mantener confidencialidad sobre credenciales.

El cliente reconoce que la revocación de accesos, cambios de permisos o configuraciones realizadas por terceros pueden afectar la operación del servicio.`,
  },
  {
    title: '7. Pagos y facturación',
    content: `Los servicios serán facturados conforme a la propuesta comercial aceptada.

Las condiciones generales de pago serán:
• Anticipo inicial acordado en propuesta comercial
• Saldo contra entrega o conforme al plan contratado
• Servicios recurrentes deberán pagarse por adelantado

En caso de retraso en pagos, CAR TECH FLOW podrá:
• Suspender temporalmente los servicios
• Limitar soporte técnico
• Detener desarrollos o implementaciones
• Cancelar servicios por incumplimiento

Los pagos realizados no son reembolsables una vez iniciada la prestación del servicio, salvo acuerdo expreso por escrito.`,
  },
  {
    title: '8. Tiempos de entrega',
    content: `Los tiempos de implementación son estimados y podrán variar por:
• Cambios solicitados por el cliente
• Falta de accesos o información
• Dependencia de proveedores externos
• Cambios regulatorios o técnicos

CAR TECH FLOW no será responsable por retrasos atribuibles a terceros o al cliente.`,
  },
  {
    title: '9. Propiedad intelectual',
    content: `Todo desarrollo, documentación, arquitectura, metodología, automatización, código, configuraciones, procesos y materiales creados por CAR TECH FLOW seguirán siendo propiedad intelectual de CAR TECH FLOW, salvo acuerdo escrito en contrario.

El cliente conserva la propiedad sobre su marca, bases de datos, contenido y activos propios.`,
  },
  {
    title: '10. Confidencialidad',
    content: `Ambas partes se obligan a mantener estricta confidencialidad respecto de:
• Información técnica
• Información financiera
• Estrategias comerciales
• Credenciales y accesos
• Bases de datos
• Procesos internos

Esta obligación permanecerá vigente incluso después de concluida la relación comercial.`,
  },
  {
    title: '11. Uso permitido de los servicios',
    content: `El cliente se compromete a no utilizar los servicios para:
• Spam o mensajería no autorizada
• Actividades fraudulentas
• Suplantación de identidad
• Distribución de malware
• Actividades ilícitas
• Violación de políticas de plataformas de terceros

CAR TECH FLOW podrá suspender servicios cuando detecte incumplimientos.`,
  },
  {
    title: '12. Limitación de responsabilidad',
    content: `CAR TECH FLOW no será responsable por:
• Suspensiones de cuentas por parte de plataformas externas
• Cambios de políticas de terceros
• Bloqueos de APIs
• Pérdida de información causada por terceros
• Ataques informáticos externos
• Uso indebido de credenciales por parte del cliente

La responsabilidad económica máxima de CAR TECH FLOW no excederá el monto efectivamente pagado por el cliente durante los últimos 3 meses de servicio.`,
  },
  {
    title: '13. Soporte técnico',
    content: `Los servicios de soporte estarán sujetos a:
• Horarios de atención previamente definidos
• Niveles de servicio contratados
• Canales oficiales de comunicación

Solicitudes fuera de horario podrán generar cargos adicionales.`,
  },
  {
    title: '14. Terminación del servicio',
    content: `CAR TECH FLOW podrá terminar la relación comercial cuando:
• Exista incumplimiento de pago
• Se detecte uso indebido de los servicios
• Existan riesgos legales o reputacionales
• El cliente incumpla políticas técnicas o regulatorias

El cliente podrá cancelar conforme a los plazos pactados en su contrato o plan.`,
  },
  {
    title: '15. Protección de datos personales',
    content: `El tratamiento de datos personales se regirá conforme al Aviso de Privacidad de CAR TECH FLOW y la legislación aplicable en México.`,
  },
  {
    title: '16. Legislación aplicable y jurisdicción',
    content: `Los presentes términos se regirán conforme a las leyes vigentes de los Estados Unidos Mexicanos.

Para cualquier controversia, las partes se someten a la jurisdicción de los tribunales competentes de Tlajomulco de Zúñiga, Jalisco, México, renunciando a cualquier otro fuero que pudiera corresponderles.`,
  },
  {
    title: '17. Aceptación',
    content: `La contratación, pago, firma electrónica, aceptación de propuesta comercial, uso de los servicios o comunicación de aprobación por cualquier medio digital constituirá aceptación plena de los presentes Términos y Condiciones.`,
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

export default function TerminosYCondiciones() {
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
            Términos y <span className="gradient-text">Condiciones de Servicio</span>
          </h1>
          <p className="text-gray-500 text-sm">
            Aplica a todos los servicios tecnológicos, consultoría y automatización ofrecidos por <strong className="text-gray-400">CAR TECH FLOW</strong> en los Estados Unidos Mexicanos.
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
            Bienvenido a <strong className="text-[#00D4FF]">CAR TECH FLOW</strong>. Los presentes Términos y Condiciones regulan el acceso, contratación y uso de los servicios tecnológicos, consultoría, automatización, soporte técnico e integración digital ofrecidos por CAR TECH FLOW dentro de los Estados Unidos Mexicanos y, en su caso, de manera internacional.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mt-3">
            Al contratar cualquiera de nuestros servicios, el cliente acepta íntegramente los presentes términos.
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
            ¿Dudas? Escríbenos a{' '}
            <a href="mailto:contacto@cartechflow.com" className="text-[#00D4FF] hover:text-white transition-colors">
              contacto@cartechflow.com
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
