import { useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import Screenshots from './components/Screenshots';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add Minecraft-style font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add Minecraft-inspired font
    const minecraftFont = document.createElement('link');
    minecraftFont.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
    minecraftFont.rel = 'stylesheet';
    document.head.appendChild(minecraftFont);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(minecraftFont);
    };
  }, []);

  return (
    <div className="text-white min-h-screen font-['Montserrat']">
      <Header />
      <main>
        <Hero />
        <Features />
        <Installation />
        <Screenshots />
        <Support />
      </main>
      <Footer />
    </div>
  );
}

export default App;
