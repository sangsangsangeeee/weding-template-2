import React from 'react';
import Hero from './components/Hero';
// Synopsis is now merged into Hero
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Location from './components/Location';
import Guestbook from './components/Guestbook';

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-[#111111] text-white selection:bg-white selection:text-black max-w-md mx-auto'>
      <Hero />
      <div className='relative z-10 bg-[#111111] shadow-[0_-20px_50px_rgba(0,0,0,1)]'>
        <Gallery />
        <Timeline />
        <Location />
        <Guestbook />

        <footer className='py-12 text-center text-white/20 text-[10px] uppercase tracking-[0.3em]'>
          <p>© 2026 The Scene. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
