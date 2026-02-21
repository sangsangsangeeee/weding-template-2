import React, { useState } from 'react';

interface TransportItem {
  title: string;
  content: string[];
}

const TRANSPORT_DATA: TransportItem[] = [
  {
    title: "지하철 (Subway)",
    content: [
      "5호선 광나루역 2번 출구",
      "2호선 강변역 1번 출구",
      "* 각 역 앞 셔틀버스 정류장에서 호텔 셔틀버스를 이용해주세요."
    ]
  },
  {
    title: "셔틀버스 (Shuttle Bus)",
    content: [
      "광나루역 2번 출구 맞은편 (10분 간격)",
      "강변역 1번 출구 앞 (10분 간격)",
      "호텔 도착 후, 애스톤 하우스 전용 차량으로 환승"
    ]
  },
  {
    title: "자가용 (Car)",
    content: [
      "네비게이션 '그랜드 워커힐 서울' 또는 '애스톤 하우스' 검색",
      "호텔 주차타워 이용 (주차 확인 도장 발급)",
      "행사 당일 발렛파킹 서비스가 제공됩니다."
    ]
  }
];

const Location: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#111111] py-24 px-6">
       <div className="max-w-2xl mx-auto mb-10">
        <h2 className="text-xs font-bold tracking-[0.4em] text-gray-400 uppercase border-l-2 border-white pl-4 mb-8">
          오시는 길
        </h2>
        <h3 className="text-2xl font-cinematic mb-2 text-white">그랜드 워커힐 서울</h3>
        <p className="text-sm text-gray-400 font-light mb-8">애스톤 하우스 (Aston House)</p>
      </div>

      {/* Dark Grayscale Map Container */}
      <div className="w-full h-[400px] bg-[#222222] relative overflow-hidden mb-16 border-y border-[#333]">
        {/* CSS Filter for True Grayscale Dark Mode */}
        <iframe 
          title="Wedding Location"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          style={{ filter: 'grayscale(100%) invert(100%) contrast(1.1) brightness(0.8)' }}
          src="https://maps.google.com/maps?q=Grand+Walkerhill+Seoul&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
        
        {/* Map Overlay to reduce interactivity issues and ensure dark feel */}
        <div className="absolute inset-0 pointer-events-none bg-black/10 mix-blend-overlay"></div>
      </div>

      {/* Accordion Directions */}
      <div className="max-w-2xl mx-auto border-t border-white/10">
        {TRANSPORT_DATA.map((item, index) => (
          <div key={index} className="border-b border-white/10">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-6 flex items-center justify-between text-left group hover:bg-white/5 transition-colors px-2 focus:outline-none"
            >
              <span className="text-sm tracking-[0.2em] uppercase text-gray-300 group-hover:text-white transition-colors">
                {item.title}
              </span>
              <span className={`text-white/50 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="px-2 text-sm font-light text-gray-400 leading-loose">
                {item.content.map((line, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 opacity-50 text-[10px]">●</span>
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