import React from 'react';
import { Instructor } from '../types';

interface InstructorCardProps {
  instructor: Instructor;
  className?: string;
  onClick?: () => void;
}

export const InstructorCard: React.FC<InstructorCardProps> = ({
  instructor,
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      id="instructor-floating-badge"
      className={`bg-[#16232E] text-white px-5 py-3.5 rounded-2xl shadow-xl border border-white/10 backdrop-blur-md flex items-center justify-between gap-5 transition-transform hover:scale-[1.02] cursor-pointer ${className}`}
    >
      <div>
        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
          {instructor.name}
        </h4>
        <p className="text-xs text-slate-400 font-medium">
          {instructor.role}
        </p>
      </div>
      <div className="shrink-0 flex items-center justify-center">
        <span className="font-handwriting text-2xl sm:text-3xl text-[#C6D94E] font-bold tracking-wider leading-none select-none">
          {instructor.initials}
        </span>
      </div>
    </div>
  );
};
