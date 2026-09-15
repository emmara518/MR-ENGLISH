import React from 'react';

interface CategoryTabsProps {
  categories: readonly string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div
      className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar"
      id="category-tabs-container"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            id={`tab-${category}`}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#16232E] text-white shadow-xs'
                : 'text-[#52616B] hover:text-[#16232E] hover:bg-[#E9EEF0]'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
