import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { floatingFeatures, heroStats, instructorData } from '../data/mockData';
import { HeroStats } from './HeroStats';
import { InstructorCard } from './InstructorCard';
import { FloatingFeatureCard, FloatingQuoteCard } from './FloatingFeatureCard';

interface HeroProps {
  onStartLearning: () => void;
  onWatchVideo: () => void;
  onInstructorClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartLearning,
  onWatchVideo,
  onInstructorClick,
}) => {
  return (
    <section
      id="hero-container"
      className="relative pt-4 sm:pt-8 md:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto overflow-visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center">
        {/* ================= LEFT COLUMN: EDITORIAL HERO COPY ================= */}
        <div className="z-10 flex flex-col justify-center w-full max-w-2xl mx-auto lg:mx-0">
          {/* Eyebrow */}
          <div className="flex items-center space-x-2.5 mb-3 sm:mb-5" id="hero-eyebrow">
            <span className="w-7 sm:w-8 h-1.5 bg-[#C6D94E] rounded-full inline-block" />
            <span className="text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-[#16232E]">
              MORE THAN ENGLISH
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] font-black text-[#16232E] tracking-[-0.035em] leading-[0.96] sm:leading-[0.92] mb-5 sm:mb-6 select-none" id="hero-title">
            <span className="block">Build</span>
            <span className="relative inline-block my-0.5 sm:my-1">
              A Brighter
              {/* Lime accent highlighter stroke */}
              <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-2.5 sm:h-5 bg-[#C6D94E]/85 -z-10 rounded-sm" />
            </span>
            <span className="block">You</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#52616B] font-medium leading-relaxed max-w-xl mb-6 sm:mb-8 lg:mb-10">
            Practical English. Real Skills. A Brighter Future. Join MR-ENGLISH and take the next step with <span className="font-semibold text-[#16232E]">Mr. Mohamed Abdelghaffar</span>.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-8 sm:mb-10 lg:mb-14">
            <button
              id="hero-primary-cta"
              onClick={onStartLearning}
              className="inline-flex items-center space-x-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-bold text-[#16232E] bg-[#C6D94E] hover:bg-[#B8CC42] shadow-sm hover:shadow-md transition-all transform active:scale-95 cursor-pointer"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={onWatchVideo}
              className="inline-flex items-center space-x-2.5 sm:space-x-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold text-[#16232E] hover:text-[#16232E] group transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#16232E] flex items-center justify-center text-white transition-transform group-hover:scale-105">
                <Play className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-white ml-0.5" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Hero Statistics Row */}
          <HeroStats stats={heroStats} />
        </div>

        {/* ================= RIGHT COLUMN: INSTRUCTOR ARTWORK & FLOATING ELEMENTS ================= */}
        <div className="relative flex items-center justify-center lg:justify-end w-full mt-4 sm:mt-0">
          {/* Main Visual Stage */}
          <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[540px] xl:max-w-[580px] h-[480px] sm:h-[540px] lg:h-[620px] flex items-end justify-center mx-auto lg:ml-auto lg:mr-0">
            
            {/* Abstract Organic Background Arc */}
            <div
              className="absolute inset-x-4 sm:inset-x-8 bottom-0 top-8 sm:top-12 rounded-t-[100px] sm:rounded-t-[160px] rounded-b-[32px] sm:rounded-b-[40px] bg-gradient-to-b from-[#D4E0DE] via-[#DEE7E6] to-[#E9EEF0] -z-10 shadow-inner"
              style={{
                clipPath: 'polygon(0% 12%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            />

            {/* Circular decorative accent */}
            <div className="absolute right-4 top-8 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#E5ECEB]/70 blur-2xl -z-20" />

            {/* Handwritten Editorial Typography (Left of Instructor) */}
            <div className="absolute left-1 sm:left-4 top-8 sm:top-14 z-20 pointer-events-none select-none -rotate-6">
              <div className="font-handwriting text-xl sm:text-2xl md:text-3xl text-[#16232E] font-bold leading-tight">
                English<br />
                Today<br />
                A Brighter<br />
                Tomorrow
              </div>
              {/* Subtle curved drawn arrow */}
              <svg className="w-8 sm:w-10 h-8 sm:h-10 text-[#C6D94E] mt-1 ml-2 sm:ml-4" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 5,5 Q 25,10 28,30" />
                <path d="M 22,25 L 28,30 L 32,23" />
              </svg>
            </div>

            {/* Instructor Portrait Image */}
            <div className="relative w-full h-full flex items-end justify-center overflow-visible z-10">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
                alt="Mr. Mohamed Abdelghaffar - English Language Instructor"
                className="w-[86%] sm:w-[80%] h-[90%] sm:h-[94%] object-cover object-top filter contrast-[1.03] saturate-[1.05]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                }}
              />
            </div>

            {/* Right Side: 3 Compact Floating Cards Stack */}
            <div className="absolute right-0 sm:-right-2 top-4 sm:top-8 lg:top-10 z-30 flex flex-col space-y-2 sm:space-y-2.5 scale-90 sm:scale-100 origin-top-right">
              {floatingFeatures.map((feature) => (
                <FloatingFeatureCard key={feature.id} feature={feature} />
              ))}
            </div>

            {/* Floating Quote Note */}
            <div className="absolute right-0 sm:right-2 bottom-20 sm:bottom-28 z-30 hidden sm:block">
              <FloatingQuoteCard />
            </div>

            {/* Dark Floating Instructor Badge across the bottom */}
            <div className="absolute left-2 sm:left-8 md:left-10 right-2 sm:right-8 md:right-10 bottom-3 sm:bottom-6 z-30">
              <InstructorCard
                instructor={instructorData}
                onClick={onInstructorClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
