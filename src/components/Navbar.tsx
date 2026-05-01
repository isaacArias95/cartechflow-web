'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${
        scrolled
          ? 'bg-[#0A0A0F]/95 backdrop-blur-md border-b border-[rgba(0,212,255,0.12)] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-28 lg:h-36">
          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0 group">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="CARTECHFLOW"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-gray-400 hover:text-[#00D4FF] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '0.65rem' }}
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="btn-cyber" style={{ padding: '10px 24px', fontSize: '0.65rem' }}>
              Empezar Ahora
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#00D4FF] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        }`}
        style={{ background: 'rgba(10,10,15,0.98)', borderTop: '1px solid rgba(0,212,255,0.1)' }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-gray-400 hover:text-[#00D4FF] transition-colors"
              style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontSize: '0.7rem' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-cyber text-center"
            style={{ padding: '12px 24px' }}
            onClick={() => setMenuOpen(false)}
          >
            Empezar Ahora
          </a>
        </div>
      </div>
    </nav>
  )
}
