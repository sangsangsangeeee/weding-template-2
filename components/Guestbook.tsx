import React, { useState } from 'react';

interface AccountInfo {
  bank: string;
  accountNumber: string;
  owner: string;
}

const GROOM_ACCOUNTS: AccountInfo[] = [
  { bank: '신한은행', accountNumber: '110-123-456789', owner: '이재현' },
  { bank: '국민은행', accountNumber: '000-00-0000-000', owner: '아버지 이몽룡' },
];

const BRIDE_ACCOUNTS: AccountInfo[] = [
  { bank: '우리은행', accountNumber: '1002-987-654321', owner: '김민지' },
  { bank: '하나은행', accountNumber: '123-456789-00107', owner: '어머니 성춘향' },
];

const Guestbook: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'groom' | 'bride' | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<{ type: 'groom' | 'bride'; index: number } | null>(
    null
  );

  const handleCopy = (text: string, type: 'groom' | 'bride', index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex({ type, index });
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const renderAccountList = (accounts: AccountInfo[], type: 'groom' | 'bride') => (
    <div
      className={`
      overflow-hidden transition-all duration-700 ease-in-out bg-[#1a1a1a]
      ${activeTab === type ? 'max-h-[500px] opacity-100 py-8 border-b border-white/10' : 'max-h-0 opacity-0'}
    `}
    >
      <div className='px-6 max-w-xl mx-auto space-y-6'>
        {accounts.map((acc, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row md:items-center justify-between p-4 border border-white/5 hover:border-white/20 transition-colors bg-[#111] relative group'
          >
            {/* Decorative corners */}
            <div className='absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/50 transition-colors'></div>
            <div className='absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/50 transition-colors'></div>

            <div className='mb-4 md:mb-0'>
              <div className='text-[10px] text-gray-500 uppercase tracking-widest mb-1'>
                {acc.bank}
              </div>
              <div className='text-lg text-gray-200 font-cinematic tracking-wide'>
                {acc.accountNumber}
              </div>
              <div className='text-xs text-gray-400 mt-1'>예금주: {acc.owner}</div>
            </div>

            <button
              onClick={() => handleCopy(`${acc.bank} ${acc.accountNumber}`, type, index)}
              className={`
                 px-6 py-2 text-[10px] uppercase tracking-[0.2em] border transition-all duration-300
                 ${
                   copiedIndex?.type === type && copiedIndex?.index === index
                     ? 'bg-white text-black border-white'
                     : 'text-gray-400 border-gray-700 hover:border-white hover:text-white'
                 }
               `}
            >
              {copiedIndex?.type === type && copiedIndex?.index === index ? 'Copied' : 'Copy'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className='bg-[#111111] py-24 border-t border-white/5'>
      <div className='max-w-2xl mx-auto px-6 mb-12'>
        <h2 className='text-xs font-bold tracking-[0.4em] text-gray-400 uppercase border-l-2 border-white pl-4 mb-4'>
          마음 전하실 곳
        </h2>
        <p className='text-sm text-gray-500 font-light leading-relaxed'>
          참석하지 못하시는 분들을 위해 계좌번호를 안내해 드립니다.
          <br />
          너그러운 마음으로 축복해 주시면 감사하겠습니다.
        </p>
      </div>

      <div className='border-t border-white/10 border-b border-white/10'>
        {/* Groom Section Header */}
        <button
          onClick={() => setActiveTab(activeTab === 'groom' ? null : 'groom')}
          className='w-full relative group h-24 md:h-32 flex items-center justify-center overflow-hidden border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors'
        >
          <span
            className={`
            absolute inset-0 bg-cover bg-center opacity-20 grayscale transition-transform duration-700
            ${activeTab === 'groom' ? 'scale-110' : 'scale-100'}
          `}
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop)',
            }}
          ></span>

          <div className='relative z-10 flex flex-col items-center'>
            <span className='text-[10px] tracking-[0.4em] text-gray-400 uppercase mb-2 group-hover:text-white transition-colors'>
              Groom's Side
            </span>
            <span className='text-2xl md:text-3xl font-cinematic text-white'>신랑측 계좌번호</span>
          </div>

          <div
            className={`absolute right-8 transition-transform duration-300 ${activeTab === 'groom' ? 'rotate-180' : ''}`}
          >
            <svg
              className='w-5 h-5 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>
        </button>

        {/* Groom Accounts Accordion Body */}
        {renderAccountList(GROOM_ACCOUNTS, 'groom')}

        {/* Bride Section Header */}
        <button
          onClick={() => setActiveTab(activeTab === 'bride' ? null : 'bride')}
          className='w-full relative group h-24 md:h-32 flex items-center justify-center overflow-hidden hover:bg-white/5 transition-colors'
        >
          <span
            className={`
            absolute inset-0 bg-cover bg-center opacity-20 grayscale transition-transform duration-700
            ${activeTab === 'bride' ? 'scale-110' : 'scale-100'}
          `}
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop)',
            }}
          ></span>

          <div className='relative z-10 flex flex-col items-center'>
            <span className='text-[10px] tracking-[0.4em] text-gray-400 uppercase mb-2 group-hover:text-white transition-colors'>
              Bride's Side
            </span>
            <span className='text-2xl md:text-3xl font-cinematic text-white'>신부측 계좌번호</span>
          </div>

          <div
            className={`absolute right-8 transition-transform duration-300 ${activeTab === 'bride' ? 'rotate-180' : ''}`}
          >
            <svg
              className='w-5 h-5 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>
        </button>

        {/* Bride Accounts Accordion Body */}
        {renderAccountList(BRIDE_ACCOUNTS, 'bride')}
      </div>
    </section>
  );
};

export default Guestbook;
