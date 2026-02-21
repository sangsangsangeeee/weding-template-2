import React, { useEffect, useRef, useState } from 'react';
import { WEDDING } from '../constants';

const Timeline: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parsing date "2024.10.24" -> "10 . 24"
  const dateParts = WEDDING.date.split('.');
  const displayDate = `${dateParts[1]} . ${dateParts[2]}`;
  const year = dateParts[0];

  return (
    <section className='bg-[#111111] py-32 overflow-hidden flex flex-col justify-center items-center min-h-[60vh]'>
      <div className='w-full px-6 mb-20 max-w-2xl text-left self-center'>
        <h2 className='text-xs font-bold tracking-[0.4em] text-gray-400 uppercase border-l-2 border-white pl-4'>
          예식 시간
        </h2>
      </div>

      <div ref={sectionRef} className='relative w-full flex items-center justify-center py-20'>
        {/* The Timeline Line */}
        <div className='absolute left-0 right-0 h-[2px] bg-[#222222] z-0'>
          <div
            className={`h-full bg-white transition-all duration-[1.5s] ease-out ${isActive ? 'w-full' : 'w-0'}`}
          />
        </div>

        {/* The Date Typography */}
        <div
          className={`
          relative z-10 bg-[#111111] px-8 py-4
          flex flex-col items-center justify-center
          transition-all duration-700 ease-out transform
          ${isActive ? 'scale-125 opacity-100' : 'scale-75 opacity-50'}
        `}
        >
          <span className='text-xs text-gray-400 tracking-[0.5em] mb-2'>{year}</span>
          <h3 className='text-6xl md:text-8xl font-bold tracking-tighter text-white font-cinematic whitespace-nowrap'>
            {displayDate}
          </h3>
          <div
            className={`
            mt-6 text-sm md:text-base tracking-[0.2em] font-light uppercase border-t border-gray-600 pt-4
            transition-all duration-1000 delay-500
            ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
           `}
          >
            {WEDDING.time}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
