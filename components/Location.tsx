import React, { useState, useRef, useEffect } from 'react';
import { WEDDING, TRANSPORT_DATA } from '../constants';

declare global {
  interface Window {
    naver: any;
  }
}

const Location: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const mapElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapElement.current || !window.naver || !window.naver.maps) {
      console.warn('Naver maps SDK is not loaded. Skipping map initialization.');
      return;
    }

    const { lat, lng } = WEDDING.mapOptions;
    const location = new window.naver.maps.LatLng(lat, lng);

    const mapOptions = {
      center: location,
      zoom: 16,
      minZoom: 14,
      maxZoom: 19,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new window.naver.maps.Map(mapElement.current, mapOptions);

    new window.naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='bg-[#111111] py-24 px-6'>
      <div className='max-w-2xl mx-auto mb-10'>
        <h2 className='text-xs font-bold tracking-[0.4em] text-gray-400 uppercase border-l-2 border-white pl-4 mb-8'>
          오시는 길
        </h2>
        <h3 className='text-2xl font-cinematic mb-2 text-white'>{WEDDING.venueName}</h3>
        <p className='text-sm text-gray-400 font-light mb-8'>{WEDDING.venueDetail}</p>
      </div>

      {/* Naver Map Container */}
      <div className='w-full h-[400px] bg-[#222222] relative overflow-hidden mb-16 border-y border-[#333]'>
        <div ref={mapElement} className='w-full h-full' />
      </div>

      {/* Accordion Directions */}
      <div className='max-w-2xl mx-auto border-t border-white/10'>
        {TRANSPORT_DATA.map((item, index) => (
          <div key={index} className='border-b border-white/10'>
            <button
              onClick={() => toggleAccordion(index)}
              className='w-full py-6 flex items-center justify-between text-left group hover:bg-white/5 transition-colors px-2 focus:outline-none'
            >
              <span className='text-sm tracking-[0.2em] uppercase text-gray-300 group-hover:text-white transition-colors'>
                {item.title}
              </span>
              <span
                className={`text-white/50 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className='px-2 text-sm font-light text-gray-400 leading-loose'>
                {item.content.map((line, i) => (
                  <li key={i} className='flex items-start'>
                    <span className='mr-2 opacity-50 text-[10px]'>●</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Location;
