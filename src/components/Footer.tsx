import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#16232E] text-white pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10" id="main-footer">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo isDark size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              Premium English learning designed for real conversational confidence, career acceleration, and academic excellence under the direct mentorship of Mr. Mohamed Abdelghaffar.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#C6D94E]">
              Same Language. A Bigger Tomorrow.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Platform
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors">
                  All Courses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('plans')} className="hover:text-white transition-colors">
                  Membership Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Mr. Mohamed
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
                  Articles & Lessons
                </button>
              </li>
            </ul>
          </div>

          {/* Learning Focus */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Curriculum
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>Beginner Foundations</li>
              <li>English Grammar</li>
              <li>Real Life Conversations</li>
              <li>IELTS Examination Prep</li>
              <li>Business Communication</li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Stay Connected
            </h4>
            <p className="text-xs text-slate-400">
              Receive weekly practical English tips and new lesson releases.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C6D94E]"
              />
              <button className="px-4 py-2 bg-[#C6D94E] text-[#16232E] text-xs font-bold rounded-xl shrink-0 hover:bg-[#B8CC42] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} MR-ENGLISH. All rights reserved. Directed by Mr. Mohamed Abdelghaffar.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#support" className="hover:text-white transition-colors">Student Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
