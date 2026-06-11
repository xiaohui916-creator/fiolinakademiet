'use client';

import { useState } from 'react';
import Link from 'next/link';


export default function BliMedlem() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
    repertoire: '',
    teacherName: '',
    teacherEmail: '',
  });
  const [sent, setSent] = useState(false);

  const update = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const { name, age, phone, address, repertoire, teacherName, teacherEmail } = form;
    if (!name || !age || !phone || !address) return;

    const body = `
Navn: ${name}
Alder: ${age}
Telefon: ${phone}
Adresse: ${address}
Nåværende repertoar: ${repertoire}
Fiolinlærer: ${teacherName}
Lærerens e-post: ${teacherEmail}
    `.trim();

    const mailto = `mailto:fiolinakademiet@gmail.com?subject=Ny medlemsregistrering – ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  const inputStyle = {
    padding: '0.7rem',
    borderRadius: '0.5rem',
    border: '1px solid #2E5F8A',
    fontSize: '0.95rem',
    width: '100%',
    color: '#1B3A5C',
    background: 'white',
  };

  const labelStyle = {
    fontSize: '0.85rem',
    fontWeight: 600 as const,
    marginBottom: '0.3rem',
    display: 'block' as const,
    color: '#1B3A5C',
  };

  return (
    <main style={{ minHeight: '100vh', background: '#F5F2EB', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto', background: 'white', borderRadius: '1.2rem', padding: '2.5rem', boxShadow: '0 4px 24px rgba(27,58,92,0.08)' }}>

        <Link href="/" style={{ fontSize: '0.9rem', color: '#2E5F8A', textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}>
          ← Tilbake til forsiden
        </Link>

        <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#1B3A5C', fontWeight: 800 }}>🎻 Bli Medlem</h1>
        <p style={{ color: '#2E5F8A', marginBottom: '2rem' }}>
          Fyll ut skjemaet nedenfor for å registrere deg som medlem i Fiolinakademiet.
        </p>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{ fontSize: '2rem' }}>✅</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1B3A5C' }}>Takk for registreringen!</p>
            <p style={{ color: '#2E5F8A', marginTop: '0.5rem' }}>Vi åpner e-postprogrammet ditt. Send e-posten for å fullføre registreringen.</p>
            <Link href="/" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.7rem 1.5rem', background: '#1B3A5C', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 600 }}>
              Tilbake til forsiden
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div>
              <label style={labelStyle}>Fiolinistens navn *</label>
              <input style={inputStyle} type="text" placeholder="Fullt navn" value={form.name} onChange={e => update('name', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Alder *</label>
              <input style={inputStyle} type="number" placeholder="f.eks. 8" min="3" max="18" value={form.age} onChange={e => update('age', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Telefonnummer *</label>
              <input style={inputStyle} type="tel" placeholder="f.eks. 400 00 000" value={form.phone} onChange={e => update('phone', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Adresse *</label>
              <input style={inputStyle} type="text" placeholder="Gate, postnummer, by" value={form.address} onChange={e => update('address', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Nåværende repertoar</label>
              <input style={inputStyle} type="text" placeholder="f.eks. Suzuki bok 2" value={form.repertoire} onChange={e => update('repertoire', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Fiolinlærer</label>
              <input style={inputStyle} type="text" placeholder="Lærerens navn" value={form.teacherName} onChange={e => update('teacherName', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Lærerens e-postadresse</label>
              <input style={inputStyle} type="email" placeholder="laerer@example.com" value={form.teacherEmail} onChange={e => update('teacherEmail', e.target.value)} />
            </div>
            <button
              onClick={handleSubmit}
              style={{ padding: '0.8rem', background: '#1B3A5C', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, marginTop: '0.5rem' }}
            >
              Send registrering →
            </button>
            <p style={{ fontSize: '0.8rem', color: '#999', textAlign: 'center' }}>* obligatoriske felt</p>
          </div>
        )}
      </div>
    </main>
  );
}