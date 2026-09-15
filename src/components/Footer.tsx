import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#16232E] text-white pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-right" id="main-footer">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo isDark size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              تعليم إنجليزي مميز مصمم لثقة حقيقية في المحادثة وتسريع الكارير والتفوق الأكاديمي تحت الإشراف المباشر من مستر محمد عبد الغفار.
            </p>
            <div className="pt-2 text-xs font-bold text-[#C6D94E]">
              نفس اللغة. مستقبل أكبر.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-slate-400">
              المنصة
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors">
                  كل الكورسات
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('plans')} className="hover:text-white transition-colors">
                  خطط الاشتراك
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  عن مستر محمد
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
                  مقالات ودروس
                </button>
              </li>
            </ul>
          </div>

          {/* Learning Focus */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-slate-400">
              المناهج
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>تأسيس المبتدئين</li>
              <li>جرامر الإنجليزية</li>
              <li>محادثات واقعية</li>
              <li>تحضير امتحان IELTS</li>
              <li>إنجليزي البيزنس</li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-slate-400">
              خليك متابع
            </h4>
            <p className="text-xs text-slate-400">
              استلم نصايح إنجليزي عملية أسبوعية وجديد الدروس.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="اكتب إيميلك"
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C6D94E] text-right"
              />
              <button className="px-4 py-2 bg-[#C6D94E] text-[#16232E] text-xs font-bold rounded-xl shrink-0 hover:bg-[#B8CC42] transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} MR-ENGLISH. جميع الحقوق محفوظة. بإشراف مستر محمد عبد الغفار.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#terms" className="hover:text-white transition-colors">الشروط والأحكام</a>
            <a href="#support" className="hover:text-white transition-colors">دعم الطلاب</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
