import React from 'react';
import { X, Play, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartLearning: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onStartLearning,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16232E]/80 backdrop-blur-sm animate-in fade-in"
      id="video-preview-modal"
      dir="rtl"
    >
      <div className="relative w-full max-w-3xl bg-[#16232E] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-right">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="إغلاق الفيديو"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Simulation */}
        <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="معاينة درس الإنجليزي"
            className="w-full h-full object-cover opacity-60"
          />

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-[#16232E] via-transparent to-transparent">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C6D94E] flex items-center justify-center text-[#16232E] shadow-xl transform hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#16232E] -ml-1 rotate-180" />
            </div>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#C6D94E] mb-1">
                رسالة ترحيبية
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                اتعلم مع مستر محمد عبد الغفار
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-1">
                "الإنجليزي العملي مش حفظ كلمات. هو إنك تتكلم بثقة وتفتح أبواب لمستقبلك."
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#16232E] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <div className="flex items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C6D94E] ml-1.5" /> دروس بجودة عالية
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C6D94E] ml-1.5" /> منهج خطوة بخطوة
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onStartLearning();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold text-[#16232E] bg-[#C6D94E] hover:bg-[#B8CC42] transition-colors"
          >
            ابدأ التعلم الآن
          </button>
        </div>
      </div>
    </div>
  );
};
