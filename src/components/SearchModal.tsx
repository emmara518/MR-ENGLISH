import React, { useState } from 'react';
import { Search, X, BookOpen, ArrowLeft } from 'lucide-react';
import { coursesData } from '../data/mockData';
import { Course } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const results = coursesData.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#16232E]/60 backdrop-blur-sm animate-in fade-in"
      id="search-dialog-modal"
      dir="rtl"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E5EAE8] text-right">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E5EAE8] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#52616B] shrink-0" />
          <input
            type="text"
            placeholder="دوّر على كورسات، جرامر، IELTS، نطق..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base font-medium text-[#16232E] focus:outline-none placeholder:text-slate-400 text-right"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#F5F6F4] flex items-center justify-center text-slate-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-5 py-2.5 bg-[#F5F6F4] border-b border-[#E5EAE8] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-400 font-medium">سريع:</span>
          {['مبتدئين', 'جرامر', 'IELTS', 'محادثة'].map((item) => (
            <button
              key={item}
              onClick={() => setSearchQuery(item)}
              className="px-2.5 py-0.5 rounded-full bg-white text-[#16232E] hover:bg-[#E9EEF0] font-medium border border-[#E5EAE8]"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-4 space-y-2">
          {results.length > 0 ? (
            results.map((course) => (
              <div
                key={course.id}
                onClick={() => {
                  onSelectCourse(course);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#F5F6F4] cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#E9EEF0] shrink-0">
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#52616B]">
                      {course.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#16232E] group-hover:text-[#16232E]">
                      {course.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#52616B] mt-0.5">
                      <BookOpen className="w-3 h-3" />
                      <span>{course.lessonsCount} درس</span>
                    </div>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#E9EEF0] group-hover:bg-[#C6D94E] flex items-center justify-center transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5 text-[#16232E]" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-slate-400 text-xs sm:text-sm">
              لا توجد كورسات مطابقة لـ "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
