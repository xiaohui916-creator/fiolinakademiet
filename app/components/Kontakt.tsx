'use client';

import { useState } from 'react';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) return;
    const mailto = `mailto:fiolinakademiet@gmail.com?subject=Melding fra ${encodeURIComponent(name)}&body=${encodeURIComponent(`Navn: ${name}\nE-post: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="kontakt" style={{ background: '#FAFAF7', padding: '5rem 2rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '1rem' }}>Kontakt oss</h2>
        <p style={{ color: '#2E5F8A', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Har du spørsmål? Ta gjerne kontakt med oss!
        </p>
        <p style={{ color: '#2E5F8A', marginBottom: '1rem' }}>
          📧 <a href="mailto:fiolinakademiet@gmail.com" style={{ color: '#1B3A5C', fontWeight: 600 }}>
            fiolinakademiet@gmail.com
          </a>
        </p>
        <p style={{ color: '#2E5F8A', marginBottom: '2rem' }}>
  <a href="https://www.facebook.com/groups/244211830545202/" target="_blank" rel="noopener noreferrer" 
    style={{ color: '#1B3A5C', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
    Følg oss på Facebook
  </a>
</p>

        {sent ? (
          <p style={{ color: '#1B3A5C', fontWeight: 600 }}>✅ Takk! Vi åpner e-postprogrammet ditt.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', textAlign: 'left' }}>
            <input type="text" placeholder="Ditt navn" value={name} onChange={e => setName(e.target.value)}
              style={{ padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid #2E5F8A', fontSize: '0.95rem', color: '#1B3A5C', background: 'white' }} />
            <input type="email" placeholder="Din e-post" value={email} onChange={e => setEmail(e.target.value)}
              style={{ padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid #2E5F8A', fontSize: '0.95rem', color: '#1B3A5C', background: 'white' }} />
            <textarea placeholder="Din melding..." value={message} onChange={e => setMessage(e.target.value)} rows={4}
              style={{ padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid #2E5F8A', fontSize: '0.95rem', color: '#1B3A5C', resize: 'vertical', background: 'white' }} />
            <button onClick={handleSubmit}
              style={{ padding: '0.8rem', background: '#1B3A5C', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600 }}>
              Send melding →
            </button>
          </div>
        )}

        <p style={{ color: '#2E5F8A', marginTop: '3rem', fontSize: '0.9rem' }}>© 2026 Fiolinakademiet</p>
      </div>
    </section>
  );
}