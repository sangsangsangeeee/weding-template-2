import React from 'react';
import { WEDDING } from '../constants';

const Hero: React.FC = () => {

  return (
    <div className="relative w-full bg-[#111111]">
      {/* 
        Sticky Video Background 
        It stays fixed at the top while the content (Title -> Synopsis) scrolls over it.
        z-index is 0 to stay behind the content but we need to ensure the App background handles layering.
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
        <img
          src="/assets/hero.jpeg"
          className="h-full w-full object-cover grayscale-[30%] contrast-125"
          alt="Wedding hero"
        />
      </div>

      {/* 
        Content Container 
        z-index 10 to float above the video.
      */}
      <div className="relative z-10 -mt-[100vh]">
        
        {/* SCENE 1: Title / Poster */}
        <section className="h-screen w-full flex flex-col items-center justify-between py-20 animate-fade-in-up">
          <div className="mt-10 tracking-[0.3em] text-xs font-light uppercase opacity-80 text-white">
            {WEDDING.heroSubtitle}
          </div>

          <div className="flex flex-col items-center gap-6 w-full px-4">
            <h1 className="font-cinematic text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-white text-center flex flex-row flex-wrap items-center justify-center gap-3 md:gap-6">
              {WEDDING.coupleNames.split('&').map((name, i) => (
                <React.Fragment key={i}>
                  <span className="drop-shadow-2xl whitespace-nowrap">{name.trim()}</span>
                  {i === 0 && <span className="text-xl md:text-2xl italic font-thin opacity-70">&</span>}
                </React.Fragment>
              ))}
            </h1>
          </div>

          <div className="flex flex-col items-center gap-2 mb-10 text-white">
            <div className="text-sm font-light tracking-[0.2em] font-cinematic border-b border-white/30 pb-2 drop-shadow-lg">
              {WEDDING.date}
            </div>
            <p className="text-xs uppercase tracking-widest opacity-70 mt-2 drop-shadow-md">
              {WEDDING.venue}
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 animate-bounce opacity-50 text-white">
            <span className="text-[10px] uppercase tracking-widest mb-2 block text-center">Scroll</span>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </section>

        {/* SCENE 2: Synopsis */}
        {/* Gradient background creates a seamless transition to the solid black footer/gallery */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-transparent via-black/80 to-[#111111]">
          <div className="max-w-2xl mx-auto w-full text-white">
            <h2 className="text-xs font-bold tracking-[0.4em] text-gray-400 mb-12 uppercase border-l-2 border-white pl-4 opacity-80">
              시놉시스
            </h2>
            
            <div className="space-y-12 pl-2 md:pl-0">
              <p className="text-2xl md:text-4xl font-light leading-snug text-left font-cinematic word-keep-all drop-shadow-xl">
                "어떤 만남은 운명처럼 다가와,<br /> 
                삶의 조용한 순간들을 채웁니다."
              </p>
              
              <div className="text-sm md:text-lg font-light text-gray-300 leading-loose text-left tracking-wide space-y-8 word-keep-all opacity-90">
                <p>
                  서로 다른 곳에서 시작된 두 개의 이야기가<br className="hidden md:block" /> 
                  이제 하나의 아름다운 영화가 됩니다.
                </p>
                <p>
                  저희 두 사람의 인생이 시작되는 첫 무대에<br className="hidden md:block" /> 
                  여러분을 초대합니다.
                </p>
                <p>
                  여러분의 축복이라는 조명 아래,<br className="hidden md:block" /> 
                  사랑과 웃음으로 가득 찬 삶을 만들어가겠습니다.
                </p>
                
                <div className="pt-8 flex items-center gap-4 opacity-80">
                  <div className="h-[1px] w-12 bg-white"></div>
                  <span className="font-cinematic italic text-lg">The Beginning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Hero;