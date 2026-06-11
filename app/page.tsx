import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OmOss from './components/OmOss';
import Aktiviteter from './components/Aktiviteter';
import Larere from './components/Larere';
import Kontakt from './components/Kontakt';
import Sponsorer from './components/Sponsorer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <OmOss />
      <Aktiviteter />
      <Larere />
      <Sponsorer />
      <Kontakt />
    </>
  );
}