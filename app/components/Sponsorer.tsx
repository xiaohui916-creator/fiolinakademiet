'use client';

export default function Sponsorer() {
  const sponsors = [
    {
      name: 'Fana Sparebank',
      logo: '/sponsors/fana-sparebank.png',
      url: 'https://www.fanasparebank.no',
    },
  ];

  return (
    <section id="sponsorer" style={{ background: '#EDE8D5', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.5rem' }}>
          Sponsorer
        </h2>
        <p style={{ color: '#2E5F8A', marginBottom: '3rem' }}>
          Takk til våre støttespillere
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {sponsors.map(sponsor => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem 2.5rem',
                boxShadow: '0 4px 20px rgba(27,58,92,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100px',
                minWidth: '200px',
                transition: 'box-shadow 0.2s, transform 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(27,58,92,0.18)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(27,58,92,0.08)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                style={{ maxHeight: '60px', maxWidth: '180px', objectFit: 'contain' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
