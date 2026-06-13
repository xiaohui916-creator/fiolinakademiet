import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const dir = path.join(process.cwd(), 'public/gallery');
  
  if (!fs.existsSync(dir)) {
    return NextResponse.json({ photos: [] });
  }

  const captionsPath = path.join(dir, 'captions.json');
  const captions: Record<string, string> = fs.existsSync(captionsPath)
    ? JSON.parse(fs.readFileSync(captionsPath, 'utf-8'))
    : {};

  const files = fs.readdirSync(dir)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, '')) || 0;
      const numB = parseInt(b.replace(/\D/g, '')) || 0;
      return numA - numB;
    })
    .map(f => ({ src: `/gallery/${f}`, alt: captions[f] || 'Fiolinakademiet' }));

  return NextResponse.json({ photos: files });
}