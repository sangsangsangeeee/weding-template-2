import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../constants';

const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; caption?: string } | null>(
    null
  );

  const openLightbox = (photo: (typeof GALLERY_PHOTOS)[0]) => {
    setSelectedPhoto({ url: photo.url, caption: photo.caption });
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  return (
    <section className='bg-[#111111] relative w-full'>
      {/* Section Header - Non-sticky, scrolls away naturally */}
      <div className='px-6 py-20 bg-[#111111] relative z-10'>
        <h2 className='text-xs font-bold tracking-[0.4em] text-gray-400 uppercase border-l-2 border-white pl-4'>
          필름 롤 (Film Roll)
        </h2>
        <p className='mt-4 text-sm text-gray-600 font-light tracking-wide'>
          Click the scene to view details.
        </p>
      </div>

      <div className='relative'>
        {GALLERY_PHOTOS.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(photo)}
            className='sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden cursor-zoom-in group'
            style={{ zIndex: index + 1 }}
          >
            {/* Image Container with Parallax-like Overlay */}
            <div className='absolute inset-0 bg-black transition-transform duration-1000 ease-out group-hover:scale-105'>
              <img
                src={photo.url}
                alt={photo.caption}
                className='w-full h-full object-cover opacity-90 filter contrast-110 brightness-90 transition-all duration-500 group-hover:brightness-100 group-hover:contrast-100'
              />
              {/* Cinematic Gradient Overlays */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none' />
              <div className='absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none' />
            </div>

            {/* Caption & Scene Number */}
            <div className='relative z-10 w-full px-8 pb-20 md:pb-0 flex flex-col items-start md:items-center justify-end md:justify-center h-full pointer-events-none'>
              <div className='overflow-hidden mb-4'>
                <span className='inline-block text-[10px] md:text-xs text-white/70 tracking-[0.4em] uppercase border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm'>
                  Scene {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className='text-4xl md:text-6xl font-cinematic text-white italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]'>
                {photo.caption}
              </h3>

              {/* Decorative Line */}
              <div className='w-12 h-[1px] bg-white/50 mt-6 hidden md:block' />

              <p className='mt-4 text-[10px] uppercase tracking-widest text-white/40 md:hidden animate-pulse'>
                Tap to view
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Outro / Spacer to transition cleanly to the next section */}
      <div className='relative z-[100] bg-[#111111] py-24 flex flex-col items-center justify-center text-white/30'>
        <p className='text-[10px] tracking-[0.3em] uppercase mb-2'>To be continued</p>
        <div className='w-[1px] h-12 bg-white/20'></div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className='fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 transition-opacity duration-300 backdrop-blur-sm'
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className='absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50'
            aria-label='Close'
          >
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={0.5}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          <div
            className='relative max-w-full max-h-full flex flex-col items-center justify-center'
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className='max-h-[85vh] max-w-full object-contain shadow-2xl'
            />
            {selectedPhoto.caption && (
              <div className='mt-6 text-center'>
                <p className='text-white font-cinematic italic text-2xl tracking-wide'>
                  {selectedPhoto.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
