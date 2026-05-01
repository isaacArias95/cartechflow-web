import type { Metadata } from 'next'
import { Orbitron, Space_Grotesk } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CARTECHFLOW | Agencia de Automatización con IA',
  description:
    'Transformamos tu negocio con inteligencia artificial. Automatización, agentes inteligentes e integración de IA para empresas que quieren liderar el futuro.',
  keywords: 'automatización IA, agentes inteligentes, inteligencia artificial, Colombia, CartechFlow',
  openGraph: {
    title: 'CARTECHFLOW | Automatización con IA',
    description: 'Agencia especializada en inteligencia artificial para empresas.',
    url: 'https://cartechflow.cloud',
    siteName: 'CARTECHFLOW',
    locale: 'es_CO',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body
        className="antialiased"
        style={{ fontFamily: 'var(--font-space), sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}
