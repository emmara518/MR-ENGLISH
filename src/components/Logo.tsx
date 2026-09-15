import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', isDark = false, size = 'md' }) => {
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtextSize = size === 'sm' ? 'text-[8px]' : 'text-[9.5px]';
  const pillHeight = size === 'sm' ? 'h-1 w-2.5' : size === 'lg' ? 'h-2 w-4' : 'h-1.5 w-3.5';

  return (
    <div className={`inline-flex flex-col leading-none select-none cursor-pointer ${className}`} id="brand-logo">
      <div className={`font-extrabold tracking-tight flex items-center ${textSize} ${isDark ? 'text-white' : 'text-[#16232E]'}`}>
        <span>MR</span>
        <span className={`inline-block ${pillHeight} bg-[#C6D94E] rounded-full mx-1 align-middle transition-transform hover:scale-110`} />
        <span>ENGLISH</span>
      </div>
      <div
        className={`tracking-[0.24em] font-semibold uppercase mt-1 ${subtextSize} ${
          isDark ? 'text-slate-400' : 'text-[#52616B]'
        }`}
      >
        اتعلم • اتدرب • انتمي
      </div>
    </div>
  );
};
