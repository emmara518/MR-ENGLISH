import React from 'react';
import { Rocket, BarChart3, Users } from 'lucide-react';
import { FloatingFeature } from '../types';

interface FloatingFeatureCardProps {
  feature: FloatingFeature;
  className?: string;
}

export const FloatingFeatureCard: React.FC<FloatingFeatureCardProps> = ({
  feature,
  className = '',
}) => {
  const getIcon = (iconName: FloatingFeature['iconName']) => {
    switch (iconName) {
      case 'rocket':
        return <Rocket className="w-4 h-4 text-[#16232E] stroke-[2.2]" />;
      case 'chart':
        return <BarChart3 className="w-4 h-4 text-[#16232E] stroke-[2.2]" />;
      case 'users':
        return <Users className="w-4 h-4 text-[#16232E] stroke-[2.2]" />;
      default:
        return <Rocket className="w-4 h-4 text-[#16232E]" />;
    }
  };

  return (
    <div
      id={`floating-feature-${feature.id}`}
      className={`bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-lg border border-[#E9EEF0] flex items-center gap-3 transition-all hover:translate-y-[-2px] hover:shadow-xl ${className}`}
    >
      <div className="w-8 h-8 rounded-xl bg-[#E9EEF0] flex items-center justify-center shrink-0">
        {getIcon(feature.iconName)}
      </div>
      <div className="text-right">
        <h4 className="text-xs sm:text-sm font-bold text-[#16232E] leading-tight">
          {feature.title}
        </h4>
        <p className="text-[10px] sm:text-[11px] text-[#52616B] font-medium leading-none mt-0.5 whitespace-nowrap">
          {feature.subtitle}
        </p>
      </div>
    </div>
  );
};

export const FloatingQuoteCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      id="hero-floating-quote"
      className={`bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#E9EEF0] max-w-[190px] relative transition-transform hover:scale-105 text-right ${className}`}
    >
      <span className="text-2xl leading-none text-slate-300 font-serif absolute -top-1 right-3">“</span>
      <div className="pt-2 font-handwriting text-xl text-[#16232E] font-bold leading-snug">
        نفس اللغة.. مستقبل أكبر
      </div>
      <div className="mt-2 w-10 h-1 bg-[#C6D94E] rounded-full" />
    </div>
  );
};
