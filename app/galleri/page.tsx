'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Photo = { src: string; alt: string };

export default function Galleri() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (data.photos?.length) setPhotos(data.photos);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (photos.length === 0) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [photos]);

  return (
    <main style={{ minHeight: '100vh', background: '#1B3A5C' }}>
      <div style={{ padding: '1.5rem 2rem' }}>
        <Link href="/" style={{
          color: 'white', textDecoration: 'none',
          fontWeight: 600, fontSize: '0.95rem',
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
        }}>
          ← Tilbake
        </Link>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '0.5rem', fontSize: '2rem', fontWeight: 800 }}>
          Bildegalleri
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
          {photos.length > 0 ? `${photos.length} bilder` : ''}
        </p>

        {loading ? (
          <p style={{ color: 'white', textAlign: 'center' }}>Laster bilder...</p>
        ) : photos.length === 0 ? (
          <p style={{ color: 'white', textAlign: 'center' }}>Ingen bilder ennå.</p>
        ) : (
          <>
            {/* 大图轮播 */}
            <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', aspectRatio: '16/9', marginBottom: '1.5rem' }}>
              {photos.map((photo, i) => (
                <div key={photo.src} style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url('${photo.src}')`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  opacity: i === current ? 1 : 0,
                  transition: 'opacity 0.8s ease',
                }} />
              ))}
              {/* 左右箭头 */}
              <button onClick={() => setCurrent(p => (p - 1 + photos.length) % photos.length)}
                style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%',
                  width: '2.5rem', height: '2.5rem', cursor: 'pointer', fontSize: '1.2rem' }}>‹</button>
              <button onClick={() => setCurrent(p => (p + 1) % photos.length)}
                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%',
                  width: '2.5rem', height: '2.5rem', cursor: 'pointer', fontSize: '1.2rem' }}>›</button>
              {/* 计数器 */}
              <div style={{ position: 'absolute', bottom: '1rem', right: '1rem',
                background: 'rgba(0,0,0,0.5)', color: 'white', padding: '0.3rem 0.8rem',
                borderRadius: '1rem', fontSize: '0.85rem' }}>
                {current + 1} / {photos.length}
              </div>
              {/* 圆点 */}
              <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '60%' }}>
                {photos.slice(0, 20).map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', border: 'none',
                      cursor: 'pointer', background: i === current ? 'white' : 'rgba(255,255,255,0.4)',
                      padding: 0 }} />
                ))}
              </div>
            </div>

            {/* 缩略图网格 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.6rem' }}>
              {photos.map((photo, i) => (
                <div key={photo.src} onClick={() => setCurrent(i)}
                  style={{
                    aspectRatio: '1', borderRadius: '0.5rem', overflow: 'hidden',
                    backgroundImage: `url('${photo.src}')`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    cursor: 'pointer',
                    opacity: i === current ? 1 : 0.55,
                    border: i === current ? '2px solid white' : '2px solid transparent',
                    transition: 'all 0.3s',
                  }} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}