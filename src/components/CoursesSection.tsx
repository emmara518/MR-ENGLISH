import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { coursesData, categoriesList, categoryMapArToEn, categoryMapEnToAr } from '../data/mockData';
import { Course, PlatformFeature } from '../types';
import { BrandStatement } from './BrandStatement';
import { CategoryTabs } from './CategoryTabs';
import { CourseCard } from './CourseCard';
import { FeatureBar } from './FeatureBar';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onJoinPlatform: () => void;
  onFeatureClick?: (feature: PlatformFeature) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourse,
  onJoinPlatform,
  onFeatureClick,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('كل الكورسات');
  const [pageIndex, setPageIndex] = useState(0);

  // Filter courses by category (يدعم العربي والإنجليزي للتوافق مع الباك إند)
  const filteredCourses = coursesData.filter((c) => {
    if (activeCategory === 'كل الكورسات' || activeCategory === 'All Courses') return true;
    const enCategory = categoryMapArToEn[activeCategory] || activeCategory;
    return c.category.toLowerCase() === enCategory.toLowerCase();
  });

  // Calculate pages for desktop 4-card slider
  const itemsPerPage = 4;
  const maxPage = Math.max(0, Math.ceil(filteredCourses.length / itemsPerPage) - 1);

  const handlePrevPage = () => {
    setPageIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setPageIndex((prev) => Math.min(maxPage, prev + 1));
  };

  const displayedCourses = filteredCourses.slice(
    pageIndex * itemsPerPage,
    pageIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto pb-20" id="courses-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* ================= LEFT SIDE: BRAND STATEMENT ================= */}
        <div className="lg:col-span-3">
          <BrandStatement />
        </div>

        {/* ================= RIGHT SIDE: ELEVATED COURSES CONTAINER ================= */}
        <div className="lg:col-span-9 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E5EAE8] flex flex-col justify-between">
          
          {/* Header Row & Controls */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 text-right">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16232E] tracking-tight">
                  استكشف كورساتنا
                </h2>
                <p className="text-xs sm:text-sm text-[#52616B] font-medium mt-1">
                  مسارات تعلم منظمة مصممة عشان توصلك لهدفك.
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  id="courses-prev-btn"
                  onClick={handlePrevPage}
                  disabled={pageIndex === 0}
                  className="w-8 h-8 rounded-full border border-[#E5EAE8] bg-white hover:bg-[#F5F6F4] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-[#16232E] transition-colors"
                  aria-label="الكورسات السابقة"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.2]" />
                </button>
                <button
                  id="courses-next-btn"
                  onClick={handleNextPage}
                  disabled={pageIndex >= maxPage}
                  className="w-8 h-8 rounded-full border border-[#E5EAE8] bg-white hover:bg-[#F5F6F4] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-[#16232E] transition-colors"
                  aria-label="الكورسات التالية"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="mb-6">
              <CategoryTabs
                categories={categoriesList}
                activeCategory={activeCategory}
                onSelectCategory={(cat) => {
                  setActiveCategory(cat);
                  setPageIndex(0);
                }}
              />
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {displayedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelectCourse={onSelectCourse}
                />
              ))}
            </div>
          </div>

          {/* Bottom Platform Features & CTA Row */}
          <FeatureBar
            onJoinClick={onJoinPlatform}
            onFeatureClick={onFeatureClick}
          />
        </div>
      </div>
    </section>
  );
};
