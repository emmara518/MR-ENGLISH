import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelectCourse: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelectCourse }) => {
  return (
    <div
      id={`course-card-${course.id}`}
      onClick={() => onSelectCourse(course)}
      className="group bg-white rounded-2xl border border-[#E5EAE8] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
    >
      {/* Course Image */}
      <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#E9EEF0]">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Special overlay for IELTS if applicable */}
        {course.category === 'Exam Preparation' && (
          <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
            <span className="text-white text-3xl font-black tracking-widest drop-shadow-md">
              IELTS
            </span>
          </div>
        )}
      </div>

      {/* Course Information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Badge */}
          <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold text-[#16232E] bg-[#E9EEF0] rounded-full mb-2">
            {course.category}
          </span>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-[#16232E] group-hover:text-[#16232E] leading-snug line-clamp-2">
            {course.title}
          </h3>
        </div>

        {/* Card Footer: Lessons count & Action button */}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#F5F6F4]">
          <div className="flex items-center space-x-1.5 text-xs text-[#52616B] font-medium">
            <BookOpen className="w-3.5 h-3.5 text-[#52616B]" />
            <span>{course.lessonsCount} Lessons</span>
          </div>

          <div className="w-7 h-7 rounded-full bg-[#F5F6F4] group-hover:bg-[#C6D94E] flex items-center justify-center transition-all group-hover:translate-x-0.5">
            <ArrowRight className="w-3.5 h-3.5 text-[#16232E] stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};
