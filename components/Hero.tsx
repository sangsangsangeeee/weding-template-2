import React from 'react';
import { WEDDING } from '../constants';
import heroImage from '../assets/hero.jpeg';

const Hero: React.FC = () => {
  const [fixedHeight, setFixedHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    // 최초 로드 시 높이를 한 번만 고정하여 주소창 변화에 반응하지 않음
    setFixedHeight(window.innerHeight);
  }, []);

  const heightStyle = fixedHeight ? `${fixedHeight}px` : '100svh';

  return (
    <div className='relative w-full bg-[#111111]'>
      {/*
        Sticky Video Background
        It stays fixed at the top while the content (Title -> Synopsis) scrolls over it.
      */}
      <div
        className='sticky top-0 w-full overflow-hidden transition-[height] duration-300 ease-out'
        style={{ height: heightStyle }}
      >
        <div className='absolute inset-0 bg-black/40 z-10' />
        <img
          src={heroImage}
          className='h-full w-full object-cover grayscale-[30%] contrast-125 transition-transform duration-300 ease-out'
          alt='Wedding hero'
        />
      </div>

      {/*
        Content Container
        z-index 10 to float above the video.
      */}
      <div className='relative z-10' style={{ marginTop: `-${heightStyle}` }}>
        {/* SCENE 1: Title / Poster */}
        <section className='w-full flex flex-col items-center justify-between py-20 animate-fade-in-up transition-[height] duration-300 ease-out' style={{ height: heightStyle }}>
          <div className='mt-10 tracking-[0.3em] text-xs font-light uppercase opacity-80 text-white'>
            {WEDDING.heroSubtitle}
          </div>

          <div className='flex flex-col items-center gap-6 w-full px-4'>
            <h1 className='font-cinematic text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-white text-center flex flex-row flex-wrap items-center justify-center gap-3 md:gap-6'>
              {WEDDING.coupleNames.split('&').map((name, i) => (
                <React.Fragment key={i}>
                  <span className='drop-shadow-2xl whitespace-nowrap'>{name.trim()}</span>
                  {i === 0 && (
                    <span className='text-xl md:text-2xl italic font-thin opacity-70'>&</span>
                  )}
                </React.Fragment>
              ))}
            </h1>
          </div>

          <div className='flex flex-col items-center gap-2 mb-10 text-white'>
            <div className='text-sm font-light tracking-[0.2em] font-cinematic border-b border-white/30 pb-2 drop-shadow-lg'>
              {WEDDING.date}
            </div>
            <p className='text-xs uppercase tracking-widest opacity-70 mt-2 drop-shadow-md'>
              {WEDDING.venue}
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className='absolute bottom-6 animate-bounce opacity-50 text-white'>
            <span className='text-[10px] uppercase tracking-widest mb-2 block text-center'>
              Scroll
            </span>
            <svg className='w-6 h-6 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M19 14l-7 7m0 0l-7-7'
              />
            </svg>
          </div>
        </section>

        {/* SCENE 2: Synopsis */}
        {/* Gradient background creates a seamless transition to the solid black footer/gallery */}
        <section className='flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-transparent via-black/80 to-[#111111]' style={{ minHeight: `calc(${heightStyle} * 0.9)` }}>
          <div className='max-w-2xl mx-auto w-full text-white'>
            <h2 className='text-xs font-bold tracking-[0.4em] text-gray-400 mb-12 uppercase border-l-2 border-white pl-4 opacity-80'>
              시놉시스
            </h2>

            <div className='space-y-12 pl-2 md:pl-0'>
              <div className='flex items-center gap-4 opacity-80'>
                <div className='h-[1px] w-12 bg-white'></div>
                <span className='font-cinematic italic text-lg'>The Beginning</span>
              </div>

              <div className='text-sm md:text-lg font-light text-gray-300 leading-loose text-left tracking-wide space-y-8 word-keep-all opacity-90'>
                {WEDDING.greeting.split('\n\n').map((paragraph, i) => (
                  <p key={i} className='whitespace-pre-line'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
