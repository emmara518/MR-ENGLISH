import React from 'react';
import { BookOpen, FileText, TrendingUp, Award, Users, ArrowRight } from 'lucide-react';
import { platformFeatures } from '../data/mockData';
import { PlatformFeature } from '../types';

interface FeatureBarProps {
  onJoinClick: () => void;
  onFeatureClick?: (feature: PlatformFeature) => void;
}

export const FeatureBar: React.FC<FeatureBarProps> = ({ onJoinClick, onFeatureClick }) => {
  const getIcon = (iconName: PlatformFeature['iconName']) => {
    switch (iconName) {
      case 'video':
        return <BookOpen className="w-4 h-4 text-[#16232E] stroke-[2.2]" />;
      case 'quiz':
        return <FileText className="w-4 h-4 text-[#16232E] stroke-[2.2]" />;
      case 'progress':
        return <TrendingUp className="w-4 h-4 text-[#16232E] stroke-[2.2]" />;
      case 'certificate':
        return <Award className="w-4 h-4 text-[#16232E] stroke-[2.2]" />;
      case 'community':
        return <Users className="w-4 h-4 text-[#16232E] stroke-[2.2]" />;
      default:
        return <BookOpen className="w-4 h-4 text-[#16232E]" />;
    }
  };

  return (
    <div className="pt-8 border-t border-[#E5EAE8] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center" id="platform-features-bar">
      {/* 5 Feature Icons and Labels */}
      <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {platformFeatures.map((feat) => (
          <div
            key={feat.id}
            onClick={() => onFeatureClick && onFeatureClick(feat)}
            className="flex flex-col items-center text-center p-2 rounded-xl hover:bg-[#F5F6F4] transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-[#F5F6F4] group-hover:bg-[#E9EEF0] flex items-center justify-center mb-2 transition-all">
              {getIcon(feat.iconName)}
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-[#16232E] leading-tight max-w-[90px]">
              {feat.title}
            </span>
          </div>
        ))}
      </div>

      {/* Dark CTA Banner on the right */}
      <div className="lg:col-span-5">
        <div
          onClick={onJoinClick}
          id="course-section-cta-card"
          className="relative bg-[#16232E] hover:bg-[#1D2D3B] text-white rounded-2xl p-5 overflow-hidden shadow-lg flex items-center justify-between cursor-pointer transition-all hover:scale-[1.01]"
        >
          {/* Watermark in background */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 font-black text-xs tracking-widest text-white/5 uppercase select-none pointer-events-none text-right leading-tight">
            LEARN<br />PRACTICE<br />BELONG
          </div>

          <div className="flex items-center space-x-4 relative z-10">
            {/* Lime Circle Button */}
            <div className="w-10 h-10 rounded-full bg-[#C6D94E] flex items-center justify-center shrink-0 shadow-md">
              <ArrowRight className="w-5 h-5 text-[#16232E] stroke-[2.5]" />
            </div>

            <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug max-w-[240px]">
              Join thousands of students who are building a brighter future with{' '}
              <strong className="text-white font-bold">MR-ENGLISH</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
