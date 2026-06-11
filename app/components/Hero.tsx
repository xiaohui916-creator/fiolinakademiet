export default function Hero() {
  return (
    <section id="hjem" style={{
      background: 'linear-gradient(135deg, #C8A840 0%, #8B6914 20%, #4A7A3A 50%, #2E5F3A 70%, #1B4A5C 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '6rem 2rem',
    }}>
      <div>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 900,
          color: 'white',
          marginBottom: '1rem',
          lineHeight: 1.2,
          textShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}>
          Fiolinakademiet
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'rgba(255,255,255,0.95)',
          maxWidth: '560px',
          margin: '0 auto 2.5rem',
        }}>
          Musikk for barn og unge mellom 3 og 18 år i Bergen
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/galleri" style={{
  background: 'white', color: '#1B3A5C',
  padding: '0.8rem 2rem', borderRadius: '2rem',
  fontWeight: 700, textDecoration: 'none', fontSize: '1rem',
}}>Se bilder 📸</a>
          <a href="https://www.facebook.com/groups/244211830545202/" 
   target="_blank" rel="noopener noreferrer"
   style={{
     background: 'transparent', color: 'white',
     padding: '0.8rem 2rem', borderRadius: '2rem',
     fontWeight: 700, textDecoration: 'none', fontSize: '1rem',
     border: '2px solid white',
     display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
   }}>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
  Følg oss
</a>
        </div>
      </div>
    </section>
  );
}