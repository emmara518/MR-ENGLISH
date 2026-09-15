import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <div
      id="brand-statement-card"
      className="relative rounded-3xl bg-[#16232E] text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl h-full min-h-[460px]"
    >
      {/* Background Architectural Overlay */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80)',
        }}
      />

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#16232E] via-[#16232E]/90 to-transparent pointer-events-none" />

      {/* Top quotation mark */}
      <div className="relative z-10 text-right">
        <span className="text-5xl sm:text-6xl font-serif text-[#C6D94E]/40 leading-none select-none block -mb-4">
          “
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.2] tracking-tight mt-2">
          إنجليزية<br />
          أفضل<br />
          <span className="text-[#C6D94E]">مستقبل</span><br />
          ألمع
        </h2>
        {/* Lime Accent Underline */}
        <div className="mt-4 w-14 h-1.5 bg-[#C6D94E] rounded-full" />
      </div>

      {/* Supporting Text */}
      <div className="relative z-10 my-6 text-right">
        <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-xs">
          بنقوّي ثقتك من خلال التحدث الطبيعي وإتقان الجرامر ومتابعة مخصصة.
        </p>
      </div>

      {/* Bottom Attribution */}
      <div className="relative z-10 pt-4 border-t border-white/10 text-right">
        <div className="font-extrabold text-sm sm:text-base tracking-wider text-white">
          MR-ENGLISH
        </div>
        <div className="text-[10px] tracking-[0.2em] font-semibold text-slate-400 mt-0.5">
          نفس اللغة .. مستقبل أكبر
        </div>
      </div>
    </div>
  );
};
