'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative"
      style={{ background: '#080810', borderTop: '1px solid rgba(0,212,255,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & tagline */}
          <div>
            <div className="relative w-20 h-20 mb-4">
              <Image
                src="/logo.png"
                alt="CARTECHFLOW"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Transformamos negocios con inteligencia artificial. Automatización inteligente para el futuro de tu empresa.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-white font-bold mb-5"
              style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              Navegación
            </h4>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 text-sm transition-colors duration-200 hover:text-[#00D4FF]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-white font-bold mb-5"
              style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-gray-600 text-sm">
              <a href="mailto:contacto@cartechflow.cloud" className="hover:text-[#00D4FF] transition-colors">
                contacto@cartechflow.cloud
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-5">
              {[
                {
                  label: 'LinkedIn',
                  href: '#',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: 'Instagram',
                  href: '#',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  href: '#',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: 'TikTok',
                  href: '#',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{
                    width: '36px',
                    height: '36px',
                    color: 'rgba(0,212,255,0.5)',
                    background: 'rgba(0,212,255,0.05)',
                    border: '1px solid rgba(0,212,255,0.15)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = '#00D4FF'
                    el.style.borderColor = 'rgba(0,212,255,0.4)'
                    el.style.background = 'rgba(0,212,255,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = 'rgba(0,212,255,0.5)'
                    el.style.borderColor = 'rgba(0,212,255,0.15)'
                    el.style.background = 'rgba(0,212,255,0.05)'
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-gray-700 text-xs">
            © {currentYear} CARTECHFLOW. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              href="/aviso-de-privacidad"
              className="text-gray-700 text-xs hover:text-[#00D4FF] transition-colors"
            >
              Aviso de Privacidad
            </Link>
            <span className="text-gray-800">·</span>
            <Link
              href="/terminos-y-condiciones"
              className="text-gray-700 text-xs hover:text-[#00D4FF] transition-colors"
            >
              Términos y Condiciones
            </Link>
            <span className="text-gray-800">·</span>
            <Link
              href="/eliminacion-de-datos"
              className="text-gray-700 text-xs hover:text-[#00D4FF] transition-colors"
            >
              Eliminación de Datos
            </Link>
            <span className="text-gray-800">·</span>
            <p className="text-gray-700 text-xs">
              Carbajal Arias Irving Isaac | RFC: CAAI951020QE1
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
