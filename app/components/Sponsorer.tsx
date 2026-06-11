export default function Sponsorer() {
  return (
    <section id="sponsorer" style={{ background: '#EDE8D5', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.5rem' }}>
          Sponsorer
        </h2>
        <p style={{ color: '#2E5F8A', marginBottom: '3rem' }}>
          Takk til våre støttespillere
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {/* 占位卡片，之后替换成真实 logo */}
          {['Sponsor 1', 'Sponsor 2', 'Sponsor 3'].map(name => (
            <div key={name} style={{
              background: 'white', borderRadius: '1rem',
              padding: '2rem', boxShadow: '0 4px 20px rgba(27,58,92,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              minHeight: '100px',
            }}>
              <p style={{ color: '#2E5F8A', fontWeight: 600 }}>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}