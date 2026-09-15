import { Course, FloatingFeature, HeroStatistic, Instructor, PlatformFeature, StudentProgress } from '../types';

export const instructorData: Instructor = {
  id: 'mohamed-abdelghaffar',
  name: 'مستر محمد عبد الغفار',
  role: 'مدرس اللغة الإنجليزية',
  bio: 'ملتزم بتمكين الطلاب بإنجليزي عملي وثقة حقيقية للنمو المهني والشخصي. بخبرة تتجاوز عشر سنوات، آلاف الطلاب غيّروا مستوى الطلاقة وفرص الكارير.',
  // ضع صورتك الخاصة في مجلد public باسم instructor.jpg وسيتم استخدامها تلقائياً
  // مع صورة احتياطية في حال عدم وجودها
  avatarUrl: '/instructor.jpg',
  // Premium professional instructor portrait with neat beard, dark shirt, warm confident smile:
  initials: 'م ع',
  studentsCount: 10450,
  rating: 4.9,
};

// Curated high quality photography matching reference cards
export const coursesData: Course[] = [
  {
    id: 'c1',
    title: 'كورس التأسيس الشامل للمبتدئين',
    category: 'Foundation',
    lessonsCount: 40,
    durationHours: 32,
    level: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80', // London Big Ben iconic view
    rating: 4.9,
    description: 'ابنِ أساساً قوياً في الإنجليزي تحدثاً وكتابة من أول يوم بخطوات واضحة وبسيطة.',
    featured: true,
    lessons: [
      { id: 'l1', title: 'التحيات والتعريف بالنفس', durationMinutes: 22, order: 1, isCompleted: true },
      { id: 'l2', title: 'تكوين جمل يومية', durationMinutes: 28, order: 2, isCompleted: true },
      { id: 'l3', title: 'الأرقام والوقت والروتين اليومي', durationMinutes: 24, order: 3, isCompleted: false },
      { id: 'l4', title: 'السؤال والإجابة بثقة', durationMinutes: 30, order: 4, isCompleted: false },
    ],
  },
  {
    id: 'c2',
    title: 'الجرامر ببساطة',
    category: 'Grammar',
    lessonsCount: 35,
    durationHours: 26,
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', // Headphones and study notes desk
    rating: 4.95,
    description: 'أتقن الأزمنة وتركيب الجمل والفروق الدقيقة بدون حفظ ممل أو قواعد معقدة.',
    featured: true,
    lessons: [
      { id: 'l201', title: 'المضارع البسيط والمستمر عملياً', durationMinutes: 19, order: 1, isCompleted: true },
      { id: 'l202', title: 'الأزمنة التامة بدون تعقيد', durationMinutes: 25, order: 2, isCompleted: true },
      { id: 'l203', title: 'قاعدة If والجمل الشرطية', durationMinutes: 18, order: 3, isCompleted: false },
      { id: 'l204', title: 'المبني للمعلوم والمجهول في الكلام اليومي', durationMinutes: 22, order: 4, isCompleted: false },
    ],
  },
  {
    id: 'c3',
    title: 'محادثات من الحياة الواقعية',
    category: 'Conversation',
    lessonsCount: 28,
    durationHours: 20,
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', // Two people conversing in modern setting
    rating: 4.88,
    description: 'اتكلم بطلاقة طبيعية وتخلص من التردد وأتقن التعبيرات والسياق الثقافي في محادثات حقيقية.',
    featured: true,
    lessons: [
      { id: 'l301', title: 'دردشة الشغل والتعارف المهني', durationMinutes: 21, order: 1, isCompleted: true },
      { id: 'l302', title: 'عبّر عن رأيك بذكاء', durationMinutes: 27, order: 2, isCompleted: false },
      { id: 'l303', title: 'التغلب على رهبة التحدث', durationMinutes: 19, order: 3, isCompleted: false },
    ],
  },
  {
    id: 'c4',
    title: 'كورس تحضير IELTS',
    category: 'Exam Preparation',
    lessonsCount: 50,
    durationHours: 45,
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', // Modern architecture glass skyscraper
    rating: 4.96,
    description: 'استهدف باند 7.5+ بقوالب كتابة مجربة ومحاكاة امتحان السبيكنج وتكتيكات الاستماع.',
    featured: true,
    lessons: [
      { id: 'l401', title: 'إطار الكتابة الأكاديمية Task 2', durationMinutes: 34, order: 1, isCompleted: false },
      { id: 'l402', title: 'السبيكنج الجزء الثاني: إتقان المونولوج', durationMinutes: 29, order: 2, isCompleted: false },
      { id: 'l403', title: 'القراءة السريعة تحت الضغط', durationMinutes: 31, order: 3, isCompleted: false },
    ],
  },
  {
    id: 'c5',
    title: 'إنجليزي البيزنس والقيادة',
    category: 'Business',
    lessonsCount: 32,
    durationHours: 24,
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    description: 'أتقن العروض المهمة والتفاوض بالإيميل والتواصل القيادي باحتراف.',
    featured: false,
  },
  {
    id: 'c6',
    title: 'الكتابة الأكاديمية والأبحاث',
    category: 'Academic',
    lessonsCount: 30,
    durationHours: 22,
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    rating: 4.87,
    description: 'اكتب أبحاثاً واضحة ومقنعة بأطروحة قوية ومفردات أكاديمية متقدمة.',
    featured: false,
  },
  {
    id: 'c7',
    title: 'عيادة النطق واللكنة',
    category: 'Skills',
    lessonsCount: 24,
    durationHours: 18,
    level: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    rating: 4.94,
    description: 'اظبط مخارج الحروف والربط والنغمة واتكلم بشكل طبيعي في أي موقف.',
    featured: false,
  },
];

export const heroStats: HeroStatistic[] = [
  { id: 's1', value: '10K+', label: 'طالب نشط', iconName: 'users' },
  { id: 's2', value: '+200', label: 'درس فيديو', iconName: 'graduation-cap' },
  { id: 's3', value: '95%', label: 'نسبة النجاح', iconName: 'chart' },
  { id: 's4', value: '4.9', label: 'تقييم الطلاب', iconName: 'star' },
];

export const floatingFeatures: FloatingFeature[] = [
  { id: 'f1', title: 'اتعلّم', subtitle: 'مهارات عملية', iconName: 'rocket' },
  { id: 'f2', title: 'اتدرّب', subtitle: 'مواقف حقيقية', iconName: 'chart' },
  { id: 'f3', title: 'اتطوّر', subtitle: 'مستقبل ألمع', iconName: 'users' },
];

export const platformFeatures: PlatformFeature[] = [
  { id: 'pf1', title: 'دروس فيديو تفاعلية', iconName: 'video' },
  { id: 'pf2', title: 'اختبارات وتقييمات', iconName: 'quiz' },
  { id: 'pf3', title: 'تابع تقدمك', iconName: 'progress' },
  { id: 'pf4', title: 'احصل على شهادات', iconName: 'certificate' },
  { id: 'pf5', title: 'مجتمع داعم', iconName: 'community' },
];

export const currentProgressDemo: StudentProgress = {
  courseId: 'c2',
  courseTitle: 'الجرامر ببساطة',
  currentLessonTitle: 'الدرس الثالث',
  lessonNumber: 3,
  remainingMinutes: 18,
  percentage: 60,
};

export const categoriesList = [
  'كل الكورسات',
  'تأسيس',
  'جرامر',
  'محادثة',
  'تحضير امتحانات',
  'مهارات',
  'أكاديمي',
  'بيزنس',
] as const;

// خريطة لربط أسماء التصنيفات العربية بالقيم الإنجليزية المخزنة (للتوافق مع الباك إند لاحقاً)
export const categoryMapArToEn: Record<string, string> = {
  'كل الكورسات': 'All Courses',
  'تأسيس': 'Foundation',
  'جرامر': 'Grammar',
  'محادثة': 'Conversation',
  'تحضير امتحانات': 'Exam Preparation',
  'مهارات': 'Skills',
  'أكاديمي': 'Academic',
  'بيزنس': 'Business',
};

export const categoryMapEnToAr: Record<string, string> = {
  Foundation: 'تأسيس',
  Grammar: 'جرامر',
  Conversation: 'محادثة',
  'Exam Preparation': 'تحضير امتحانات',
  Skills: 'مهارات',
  Academic: 'أكاديمي',
  Business: 'بيزنس',
};

export const levelMapEnToAr: Record<string, string> = {
  Beginner: 'مبتدئ',
  Intermediate: 'متوسط',
  Advanced: 'متقدم',
  'All Levels': 'كل المستويات',
};

export const INSTRUCTOR_FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85';
