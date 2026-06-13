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