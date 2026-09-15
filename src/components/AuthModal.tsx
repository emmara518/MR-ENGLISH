import React, { useState } from 'react';
import { X, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'register';
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'register',
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(email || 'student@mr-english.com');
      onClose();
      setSubmitted(false);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16232E]/70 backdrop-blur-sm animate-in fade-in"
      id="auth-modal"
      dir="rtl"
    >
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5EAE8] text-right">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 w-8 h-8 rounded-full bg-[#F5F6F4] hover:bg-[#E9EEF0] flex items-center justify-center text-slate-500"
          aria-label="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-6">
          <Logo size="md" className="mx-auto" />
          <h3 className="text-xl font-black text-[#16232E] mt-3">
            {mode === 'register' ? 'ابدأ رحلتك في الإنجليزي' : 'أهلاً بعودتك'}
          </h3>
          <p className="text-xs text-[#52616B] mt-1">
            {mode === 'register'
              ? 'انضم لمستر محمد عبد الغفار وابنِ مستقبلاً ألمع.'
              : 'سجل دخولك عشان تكمل تقدمك في الكورسات.'}
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#C6D94E]/30 text-[#16232E] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-[#16232E]" />
            </div>
            <h4 className="text-base font-bold text-[#16232E]">
              {mode === 'register' ? 'أهلاً بيك في MR-ENGLISH!' : 'تم تسجيل الدخول بنجاح!'}
            </h4>
            <p className="text-xs text-[#52616B]">جاري تحويلك للوحة الطالب...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-xs font-bold text-[#16232E] mb-1">
                  الاسم بالكامل
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: أحمد محمد"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F6F4] border border-[#E5EAE8] text-sm text-[#16232E] focus:outline-none focus:border-[#16232E] text-right"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#16232E] mb-1">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F6F4] border border-[#E5EAE8] text-sm text-[#16232E] focus:outline-none focus:border-[#16232E] text-right"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#16232E] mb-1">
                كلمة السر
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F6F4] border border-[#E5EAE8] text-sm text-[#16232E] focus:outline-none focus:border-[#16232E] text-right"
                dir="ltr"
              />
            </div>

            {/* Quick Demo One-Click Fill */}
            <div className="flex items-center justify-between text-xs pt-1">
              <button
                type="button"
                onClick={() => {
                  setEmail('student@mr-english.com');
                  setPassword('demo1234');
                  setName('طالب تجريبي');
                }}
                className="text-[11px] font-bold text-[#16232E] hover:underline"
              >
                استخدم حساب تجريبي
              </button>
              {mode === 'login' && (
                <a href="#forgot" className="text-[11px] text-[#52616B] hover:underline">
                  نسيت كلمة السر؟
                </a>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full text-xs sm:text-sm font-bold text-[#16232E] bg-[#C6D94E] hover:bg-[#B8CC42] flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-98 cursor-pointer mt-2"
            >
              <span>{mode === 'register' ? 'أنشئ حسابك وابدأ' : 'تسجيل الدخول'}</span>
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Mode switch */}
            <div className="pt-4 text-center border-t border-[#E5EAE8]">
              <span className="text-xs text-[#52616B]">
                {mode === 'register' ? 'عندك حساب بالفعل؟' : 'لسه معندكش حساب؟'}{' '}
              </span>
              <button
                type="button"
                onClick={() => setMode(mode === 'register' ? 'login' : 'register')}
                className="text-xs font-bold text-[#16232E] hover:underline"
              >
                {mode === 'register' ? 'سجل الدخول' : 'سجل مجاناً'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
