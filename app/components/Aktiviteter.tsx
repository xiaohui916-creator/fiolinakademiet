'use client';
import { useState } from 'react';

const AKTIVITETER = [
  {
    icon: '🎻',
    title: 'Øving',
    description: 'Individuelle og felles øvinger for alle elever tilknyttet Fiolinakademiet.',
  },
  {
    icon: '👥',
    title: 'Gruppetime',
    description: 'Månedlige samlinger med gruppetimer, mesterklasse og kafékonsert.',
  },
  {
    icon: '✨',
    title: 'Annet',
    description: 'ESA-konferanse, De Unges Festspilldag og andre sosiale og musikalske arrangement.',
  },
];

const PLAN = [
  {
    sesong: 'HØST -26',
    aktiviteter: [
      { dato: 'Lørdag 22.8', tittel: 'Oppstartssamling', type: 'annet' },
      { dato: 'Fredag 25.9', tittel: 'Gruppetime, mesterklasse og kafékonsert', type: 'gruppe' },
      { dato: 'Fredag 23.10 – Søndag 25.10', tittel: 'HØSTSEMINAR med Ingrid Jensen og Jan Matthiessen', type: 'annet' },
      { dato: 'Fredag 20.11', tittel: 'Gruppetime, mesterklasse og kafékonsert', type: 'gruppe' },
    ],
  },
  {
    sesong: 'VÅR -27',
    aktiviteter: [
      { dato: 'Fredag 8.1', tittel: 'Gruppetime, mesterklasse og kafékonsert', type: 'gruppe' },
      { dato: 'Fredag 5.2', tittel: 'Gruppetime, mesterklasse og kafékonsert', type: 'gruppe' },
      { dato: 'Fredag 12.3', tittel: 'Gruppetime, mesterklasse og kafékonsert', type: 'gruppe' },
      { dato: 'Fredag 9.4', tittel: 'Øving til ESA-konferansen', type: 'oving' },
      { dato: 'Fredag 16.4', tittel: 'ESA-konferanse', type: 'annet' },
      { dato: 'Fredag 21.5', tittel: 'Gruppetime, mesterklasse og kafékonsert', type: 'gruppe' },
      { dato: 'Mai/Juni', tittel: 'De Unges Festspilldag', type: 'annet' },
    ],
  },
];

const TYPE_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  oving:  { bg: '#E8F4FD', color: '#1B3A5C', label: 'Øving' },
  gruppe: { bg: '#FFF3CD', color: '#7D5A00', label: 'Gruppetime' },
  annet:  { bg: '#F3E8FD', color: '#4A1B7D', label: 'Annet' },
};

export default function Aktiviteter() {
  const [open, setOpen] = useState(false);

  return (
    <section id="aktiviteter" style={{ background: '#EDE8D5', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.5rem' }}>Aktiviteter</h2>
        <p style={{ color: '#2E5F8A', marginBottom: '3rem' }}>Hva vi tilbyr</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2.5rem' }}>
          {AKTIVITETER.map(a => (
            <div key={a.title} style={{
              background: 'white', borderRadius: '1rem',
              padding: '2rem 1.5rem', boxShadow: '0 4px 20px rgba(27,58,92,0.08)',
              border: '1px solid rgba(27,58,92,0.08)',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{a.icon}</div>
              <h3 style={{ fontWeight: 700, color: '#1B3A5C', marginBottom: '0.5rem' }}>{a.title}</h3>
              <p style={{ color: '#2E5F8A', fontSize: '0.9rem', lineHeight: 1.6 }}>{a.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: '#1B3A5C', color: 'white', border: 'none',
            padding: '0.8rem 2rem', borderRadius: '2rem', fontWeight: 600,
            cursor: 'pointer', fontSize: '1rem',
          }}
        >
          {open ? '▲ Skjul aktivitetsplan' : '▼ Se full aktivitetsplan'}
        </button>

        {open && (
          <div style={{ marginTop: '3rem', textAlign: 'left' }}>
            {PLAN.map(sesong => (
              <div key={sesong.sesong} style={{ marginBottom: '3rem' }}>
                <h3 style={{
                  fontSize: '1.3rem', fontWeight: 800, color: '#1B3A5C',
                  borderBottom: '2px solid #1B3A5C', paddingBottom: '0.5rem',
                  marginBottom: '1.5rem',
                }}>
                  {sesong.sesong}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {sesong.aktiviteter.map((a, i) => {
                    const style = TYPE_STYLE[a.type];
                    return (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center',
                        gap: '1rem', padding: '0.9rem 1.2rem',
                        background: 'white', borderRadius: '0.75rem',
                        boxShadow: '0 2px 8px rgba(27,58,92,0.06)',
                        borderLeft: `4px solid ${style.color}`,
                      }}>
                        <span style={{
                          minWidth: '160px', fontWeight: 700,
                          color: '#1B3A5C', fontSize: '0.9rem',
                        }}>{a.dato}</span>
                        <span style={{ flex: 1, color: '#2E5F8A', fontSize: '0.95rem' }}>{a.tittel}</span>
                        <span style={{
                          background: style.bg, color: style.color,
                          padding: '0.2rem 0.7rem', borderRadius: '1rem',
                          fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap',
                        }}>{style.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}