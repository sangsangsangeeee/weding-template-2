import React from 'react';

const Synopsis: React.FC = () => {
  return (
    <section className='bg-[#111111] px-6 py-24 md:py-32 flex flex-col justify-center min-h-[50vh]'>
      <div className='max-w-2xl mx-auto w-full'>
        <h2 className='text-xs font-bold tracking-[0.4em] text-gray-400 mb-12 uppercase border-l-2 border-white pl-4'>
          시놉시스
        </h2>

        <div className='space-y-8'>
          <p className='text-xl md:text-3xl font-light leading-relaxed text-left text-gray-200 font-cinematic word-keep-all'>
            "어떤 만남은 운명처럼 다가와, 삶의 조용한 순간들을 채웁니다."
          </p>

          <div className='text-sm md:text-base font-light text-gray-400 leading-loose text-left tracking-wide space-y-6 word-keep-all'>
            <p>
              서로 다른 곳에서 시작된 두 개의 이야기가 이제 하나의 아름다운 영화가 됩니다. 저희 두
              사람의 인생이 시작되는 첫 무대에 여러분을 초대합니다.
            </p>
            <p>여러분의 축복이라는 조명 아래, 사랑과 웃음으로 가득 찬 삶을 만들어가겠습니다.</p>
            <p className='text-white pt-4'>이 아름다운 시작을 함께 지켜봐 주세요.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synopsis;
