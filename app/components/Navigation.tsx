'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '#hjem', label: 'Hjem' },
  { href: '#om-oss', label: 'Om oss' },
  { href: '#aktiviteter', label: 'Aktiviteter' },
  { href: '#larere', label: 'Lærere' },
  { href: '#sponsorer', label: 'Sponsorer' },
  { href: '#kontakt', label: 'Kontakt' },
] as const;

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: '#EDE8D5',
      boxShadow: '0 2px 12px rgba(27,58,92,0.08)',
      padding: '0 2rem',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        height: '90px',
      }}>
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.webp" alt="Fiolinakademiet" width={200} height={75} style={{ objectFit: 'contain' }} />
        </Link>

        {/* Desktop menu */}
        <ul style={{
          display: 'flex', gap: '2rem', listStyle: 'none', margin: 0,
        }} className="desktop-nav">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} style={{
                color: '#1B3A5C', textDecoration: 'none',
                fontWeight: 600, fontSize: '1rem',
              }}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Bli Medlem + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/bli-medlem" style={{
            background: '#1B3A5C', color: 'white',
            padding: '0.6rem 1.4rem', borderRadius: '2rem',
            fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
          }} className="desktop-nav">
            Bli Medlem
          </Link>

          {/* Hamburger button - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '0.5rem', color: '#1B3A5C',
            }}
            className="mobile-menu-btn"
            aria-label="Meny"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#EDE8D5',
          padding: '1rem 2rem 1.5rem',
          borderTop: '1px solid rgba(27,58,92,0.1)',
        }} className="mobile-menu">
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} onClick={() => setMenuOpen(false)} style={{
                  color: '#1B3A5C', textDecoration: 'none',
                  fontWeight: 600, fontSize: '1.1rem',
                  display: 'block', padding: '0.3rem 0',
                }}>{label}</Link>
              </li>
            ))}
            <li>
              <Link href="/bli-medlem" onClick={() => setMenuOpen(false)} style={{
                background: '#1B3A5C', color: 'white',
                padding: '0.7rem 1.5rem', borderRadius: '2rem',
                fontWeight: 700, textDecoration: 'none', fontSize: '1rem',
                display: 'inline-block', marginTop: '0.5rem',
              }}>Bli Medlem</Link>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}