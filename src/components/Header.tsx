import React, { useState } from 'react';
import { Search, ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onNavigateSection: (sectionId: string) => void;
  activeNav?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenAuth,
  onNavigateSection,
  activeNav = 'home',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Courses', id: 'courses' },
    { label: 'Plans', id: 'plans' },
    { label: 'About', id: 'about' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-4 z-40 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full" id="main-header">
      <div className="bg-[#FFFFFF]/90 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 shadow-sm border border-[#E5EAE8] flex items-center justify-between transition-all duration-300 hover:shadow-md">
        {/* Left: Brand Wordmark */}
        <div onClick={() => onNavigateSection('home')} className="flex items-center">
          <Logo size="md" />
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => onNavigateSection(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#E9EEF0] text-[#16232E]'
                    : 'text-[#52616B] hover:text-[#16232E] hover:bg-[#F5F6F4]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Search Button */}
          <button
            id="header-search-button"
            onClick={onOpenSearch}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#16232E] bg-[#F5F6F4] hover:bg-[#E9EEF0] transition-colors"
            title="Search courses and lessons"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-[#16232E]" />
          </button>

          {/* Log In */}
          <button
            id="header-login-button"
            onClick={() => onOpenAuth('login')}
            className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#16232E] bg-[#F5F6F4] hover:bg-[#E9EEF0] transition-colors"
          >
            Log In
          </button>

          {/* Start Learning Primary CTA */}
          <button
            id="header-start-learning-button"
            onClick={() => onOpenAuth('register')}
            className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-[#16232E] bg-[#C6D94E] hover:bg-[#B8CC42] shadow-xs transition-all transform active:scale-95 cursor-pointer"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Hamburger Menu on Mobile */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#16232E] bg-[#F5F6F4] hover:bg-[#E9EEF0]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl shadow-xl border border-[#E5EAE8] p-4 flex flex-col space-y-2 animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigateSection(item.id);
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-xl text-sm font-semibold text-[#16232E] hover:bg-[#F5F6F4]"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#E5EAE8] flex flex-col space-y-2">
            <button
              onClick={() => {
                onOpenAuth('login');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 text-center text-sm font-semibold text-[#16232E] bg-[#F5F6F4] rounded-xl"
            >
              Log In
            </button>
            <button
              onClick={() => {
                onOpenAuth('register');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-[#16232E] bg-[#C6D94E] rounded-xl flex items-center justify-center space-x-1.5"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
