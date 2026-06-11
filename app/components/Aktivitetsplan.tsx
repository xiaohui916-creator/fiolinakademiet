const PLAN = [
  {
    sesong: 'HØST -26',
    aktiviteter: [
      { dato: 'Lørdag 22.8', tittel: 'Oppstartssamling', type: 'annet' },
      { dato: 'Fredag 25.9', tittel: 'Gruppetimer, mesterklasse og kafékonsert', type: 'gruppe' },
      { dato: 'Fredag 23.10 – Søndag 25.10', tittel: 'HØSTSEMINAR med Ingrid Jensen og Jan Matthiessen', type: 'seminar' },
      { dato: 'Fredag 20.11', tittel: 'Gruppetimer, mesterklasse og kafékonsert', type: 'gruppe' },
    ],
  },
  {
    sesong: 'VÅR -27',
    aktiviteter: [
      { dato: 'Fredag 8.1', tittel: 'Gruppetimer, mesterklasse og kafékonsert', type: 'gruppe' },
      { dato: 'Fredag 5.2', tittel: 'Gruppetimer, mesterklasse og kafékonsert', type: 'gruppe' },
      { dato: 'Fredag 12.3', tittel: 'Gruppetimer, mesterklasse og kafékonsert', type: 'gruppe' },
      { dato: 'Fredag 9.4', tittel: 'Øving til ESA-konferansen', type: 'konsert' },
      { dato: 'Fredag 16.4', tittel: 'ESA-konferanse konsert', type: 'konsert' },
      { dato: 'Fredag 21.5', tittel: 'Gruppetimer, mesterklasse og kafékonsert', type: 'gruppe' },
      { dato: 'Mai/Juni', tittel: 'Delta på De Unges Festspilldag', type: 'konsert' },
    ],
  },
];

const TYPE_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  gruppe:  { bg: '#E8F4FD', color: '#1B3A5C', label: 'Gruppetimer' },
  seminar: { bg: '#FFF3CD', color: '#7D5A00', label: 'Seminar' },
  konsert: { bg: '#E8F5E9', color: '#1B5E20', label: 'Konsert' },
  annet:   { bg: '#F3E8FD', color: '#4A1B7D', label: 'Annet' },
};

export default function Aktivitetsplan() {
  return (
    <section id="aktivitetsplan" style={{ background: '#FAFAF7', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1B3A5C', textAlign: 'center', marginBottom: '0.5rem' }}>
          Aktivitetsplan
        </h2>
        <p style={{ color: '#2E5F8A', textAlign: 'center', marginBottom: '3rem' }}>
          Oversikt over alle samlinger og arrangement
        </p>

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
    </section>
  );
}