import React from 'react';
import { X, BookOpen, Clock, BarChart, Check, Play, Star } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll,
}) => {
  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16232E]/70 backdrop-blur-sm animate-in fade-in"
      id="course-detail-modal"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E5EAE8] max-h-[90vh] flex flex-col">
        {/* Top Header with Image and close */}
        <div className="relative h-44 sm:h-52 w-full bg-[#16232E] shrink-0">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 bg-[#C6D94E] text-[#16232E] text-xs font-bold rounded-full mb-2">
              {course.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {course.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#52616B] pb-4 border-b border-[#E5EAE8]">
            <div className="flex items-center space-x-1.5">
              <BookOpen className="w-4 h-4 text-[#16232E]" />
              <span>{course.lessonsCount} Lessons</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-[#16232E]" />
              <span>{course.durationHours} Total Hours</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <BarChart className="w-4 h-4 text-[#16232E]" />
              <span>{course.level}</span>
            </div>
            <div className="flex items-center space-x-1 text-[#16232E]">
              <Star className="w-4 h-4 fill-[#C6D94E] text-[#C6D94E]" />
              <span>{course.rating} Rating</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-[#16232E] uppercase tracking-wider mb-2">
              About This Course
            </h3>
            <p className="text-sm text-[#52616B] leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Syllabus / Curriculum */}
          {course.lessons && course.lessons.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-[#16232E] uppercase tracking-wider mb-3">
                Course Curriculum Preview
              </h3>
              <div className="space-y-2">
                {course.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F5F6F4] hover:bg-[#E9EEF0] transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#16232E] text-xs font-bold shadow-2xs">
                        {lesson.isCompleted ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Play className="w-3 h-3 fill-[#16232E] ml-0.5" />
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#16232E]">
                        {lesson.order}. {lesson.title}
                      </span>
                    </div>
                    <span className="text-xs text-[#52616B] font-medium">
                      {lesson.durationMinutes} min
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructor Badge in Modal */}
          <div className="p-4 rounded-2xl bg-[#E9EEF0] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-400">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                  alt="Mr. Mohamed Abdelghaffar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#16232E]">
                  Taught by Mr. Mohamed Abdelghaffar
                </h4>
                <p className="text-[11px] text-[#52616B]">
                  Lead Instructor & Curriculum Architect
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-5 bg-[#F5F6F4] border-t border-[#E5EAE8] flex items-center justify-between">
          <div className="text-xs text-[#52616B]">
            Full lifetime access & certificate of completion
          </div>
          <button
            onClick={() => {
              onEnroll(course);
              onClose();
            }}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-[#16232E] bg-[#C6D94E] hover:bg-[#B8CC42] shadow-xs cursor-pointer"
          >
            Enroll in Course
          </button>
        </div>
      </div>
    </div>
  );
};
