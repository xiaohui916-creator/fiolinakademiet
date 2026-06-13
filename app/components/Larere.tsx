const LARERE = [
  {
    name: 'Kari Knudsen',
    title: 'Fiolinist & pedagogisk leder',
    bio: 'Underviser barn og ungdom mellom 3 og 18 år ved Bergen kulturskole og privat i fiolin, kammermusikk og orkester. Kunstnerisk leder for orkesteret Regnbuen og sommerskolen Sommerstryk. Har studert Dalcrozerytmikk hos The Dalcroze Society UK.',
    icon: '🎻',
  },
  {
    name: 'Stefan Bivand',
    title: 'Fiolinist & styreleder NSF',
    bio: 'Utdannet fra Griegakademiet (UiB) med utvekslingsopphold ved Musikkhøyskolen i Poznan. Mastergrad fra NTNU i Trondheim. Suzukilærer nivå 4, og styreleder i Norsk Suzukiforbund.',
    icon: '🎻',
  },
  {
    name: 'Elna Selle',
    title: 'Fiolinist & hardingfelespesialist',
    bio: 'Fiolinlærer ved Bergen kulturskole med spesialkompetanse innen hardingfele. Instruktør i Bergen Juniorspelmannslag.',
    icon: '🎻',
  },
  {
    name: 'Anne-Catherine Vonäsch-Tvinnereim',
    title: 'Fiolinist & Suzukilærer',
    bio: 'Suzuki-sertifisert lærer i fiolin, bratsj og tidlig barndomsmusikk (ECE). Aktiv freelance fiolinist i Bergen.',
    icon: '🎻',
  },
  {
    name: 'Øystein Salvesen',
    title: 'Fiolinist',
    bio: 'Fiolinlærer tilknyttet Fiolinakademiet i Bergen.',
    icon: '🎻',
  },
];

export default function Larere() {
  return (
    <section id="larere" style={{ background: '#FAFAF7', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.5rem' }}>Våre lærere</h2>
        <p style={{ color: '#2E5F8A', marginBottom: '3rem' }}>Møt teamet vårt</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {LARERE.map(l => (
            <div key={l.name} style={{
              background: 'white', borderRadius: '1rem',
              padding: '2rem', boxShadow: '0 4px 20px rgba(27,58,92,0.08)',
              border: '1px solid rgba(27,58,92,0.08)',
              textAlign: 'left',
            }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                background: '#E8F4FD', marginBottom: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem',
              }}>{l.icon}</div>
              <h3 style={{ fontWeight: 700, color: '#1B3A5C', marginBottom: '0.3rem' }}>{l.name}</h3>
              <p style={{ color: '#4A8DB5', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.7rem' }}>{l.title}</p>
              <p style={{ color: '#2E5F8A', fontSize: '0.9rem', lineHeight: 1.6 }}>{l.bio}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          #larere { padding: 3rem 1rem !important; }
        }
      `}</style>
    </section>
  );
}