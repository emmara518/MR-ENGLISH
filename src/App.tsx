import { useState } from 'react';
import { coursesData, instructorData } from './data/mockData';
import { Course, PlatformFeature } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { VideoModal } from './components/VideoModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState<{ isOpen: boolean; mode: 'login' | 'register' }>({
    isOpen: false,
    mode: 'register',
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenAuth = (mode: 'login' | 'register' = 'register') => {
    setAuthModalState({ isOpen: true, mode });
  };

  const handleCloseAuth = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'courses') {
      const el = document.getElementById('courses-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'about') {
      setSelectedCourse(coursesData[0]);
    } else {
      const labels: Record<string, string> = {
        plans: 'خطط الأسعار',
        blog: 'المقالات',
        contact: 'تواصل معنا',
      };
      showToast(`جاري الانتقال إلى ${labels[sectionId] || sectionId}...`);
    }
  };

  const handleFeatureClick = (feat: PlatformFeature) => {
    showToast(`استكشف ${feat.title}`);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#F5F6F4] text-[#16232E] relative selection:bg-[#C6D94E] selection:text-[#16232E]">
      
      {/* Top Banner */}
      <div className="bg-[#16232E] text-white text-[11px] py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#C6D94E] animate-pulse" />
        <span>منصة MR-ENGLISH الرسمية • مستر محمد عبد الغفار</span>
      </div>

      {/* Main Navigation Header */}
      <Header
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenAuth={handleOpenAuth}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero
          onStartLearning={() => handleOpenAuth('register')}
          onWatchVideo={() => setIsVideoModalOpen(true)}
          onInstructorClick={() => {
            showToast(`المدرس: ${instructorData.name} (+${instructorData.studentsCount.toLocaleString('ar-EG')} طالب)`);
          }}
        />

        {/* Courses & Brand Statement Section */}
        <CoursesSection
          onSelectCourse={(course) => setSelectedCourse(course)}
          onJoinPlatform={() => handleOpenAuth('register')}
          onFeatureClick={handleFeatureClick}
        />
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigateSection} />

      {/* Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onStartLearning={() => {
          setIsVideoModalOpen(false);
          handleOpenAuth('register');
        }}
      />

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={(course) => {
          setSelectedCourse(null);
          showToast(`تم الاشتراك في "${course.title}". أهلاً بيك!`);
        }}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectCourse={(course) => {
          setSelectedCourse(course);
        }}
      />

      <AuthModal
        isOpen={authModalState.isOpen}
        initialMode={authModalState.mode}
        onClose={handleCloseAuth}
        onSuccess={(email) => {
          showToast(`تم تسجيل الدخول باسم ${email}`);
        }}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#16232E] text-white px-5 py-2.5 rounded-full shadow-2xl border border-[#C6D94E]/40 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-[#C6D94E]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
