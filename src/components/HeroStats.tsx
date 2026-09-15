import React from 'react';
import { Users, GraduationCap, TrendingUp, Star } from 'lucide-react';
import { HeroStatistic } from '../types';

interface HeroStatsProps {
  stats: HeroStatistic[];
}

export const HeroStats: React.FC<HeroStatsProps> = ({ stats }) => {
  const getIcon = (iconName: HeroStatistic['iconName']) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-4 h-4 text-[#16232E]" />;
      case 'graduation-cap':
        return <GraduationCap className="w-4 h-4 text-[#16232E]" />;
      case 'chart':
        return <TrendingUp className="w-4 h-4 text-[#16232E]" />;
      case 'star':
        return <Star className="w-4 h-4 text-[#16232E] fill-[#16232E]" />;
      default:
        return <Users className="w-4 h-4 text-[#16232E]" />;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E2E7E9]" id="hero-stats-row">
      {stats.map((stat) => (
        <div key={stat.id} className="flex items-center gap-3" id={`hero-stat-${stat.id}`}>
          <div className="w-8 h-8 rounded-full bg-[#E9EEF0] flex items-center justify-center shrink-0">
            {getIcon(stat.iconName)}
          </div>
          <div className="text-right">
            <div className="text-xl sm:text-2xl font-extrabold text-[#16232E] tracking-tight leading-none">
              {stat.value}
            </div>
            <div className="text-xs font-medium text-[#52616B] mt-0.5 whitespace-nowrap">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
