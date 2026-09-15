import { Course, FloatingFeature, HeroStatistic, Instructor, PlatformFeature, StudentProgress } from '../types';

export const instructorData: Instructor = {
  id: 'mohamed-abdelghaffar',
  name: 'Mr. Mohamed Abdelghaffar',
  role: 'English Language Instructor',
  bio: 'Dedicated to empowering learners with practical, confident English for professional and personal growth. With over a decade of experience, thousands of students have transformed their fluency and career opportunities.',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
  // Premium professional instructor portrait with neat beard, dark shirt, warm confident smile:
  initials: 'MA',
  studentsCount: 10450,
  rating: 4.9,
};

// Curated high quality photography matching reference cards
export const coursesData: Course[] = [
  {
    id: 'c1',
    title: 'Complete English for Beginners',
    category: 'Foundation',
    lessonsCount: 40,
    durationHours: 32,
    level: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80', // London Big Ben iconic view
    rating: 4.9,
    description: 'Build an unbreakable foundation in spoken and written English from day one with clear, step-by-step guidance.',
    featured: true,
    lessons: [
      { id: 'l1', title: 'Essential Greetings & Introductions', durationMinutes: 22, order: 1, isCompleted: true },
      { id: 'l2', title: 'Building Everyday Sentences', durationMinutes: 28, order: 2, isCompleted: true },
      { id: 'l3', title: 'Numbers, Time, and Daily Routine', durationMinutes: 24, order: 3, isCompleted: false },
      { id: 'l4', title: 'Asking & Answering Questions with Confidence', durationMinutes: 30, order: 4, isCompleted: false },
    ],
  },
  {
    id: 'c2',
    title: 'English Grammar Made Simple',
    category: 'Grammar',
    lessonsCount: 35,
    durationHours: 26,
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', // Headphones and study notes desk
    rating: 4.95,
    description: 'Master English tenses, sentence structures, and nuances without tedious memorization or confusing rules.',
    featured: true,
    lessons: [
      { id: 'l201', title: 'Present Simple vs Present Continuous in Action', durationMinutes: 19, order: 1, isCompleted: true },
      { id: 'l202', title: 'Perfect Tenses Demystified', durationMinutes: 25, order: 2, isCompleted: true },
      { id: 'l203', title: 'Conditionals & Hypothetical Thinking', durationMinutes: 18, order: 3, isCompleted: false },
      { id: 'l204', title: 'Active vs Passive Voice in Everyday Speech', durationMinutes: 22, order: 4, isCompleted: false },
    ],
  },
  {
    id: 'c3',
    title: 'Real Life Conversations',
    category: 'Conversation',
    lessonsCount: 28,
    durationHours: 20,
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', // Two people conversing in modern setting
    rating: 4.88,
    description: 'Unlock natural fluency, eliminate hesitation, and master idioms and cultural context in authentic conversations.',
    featured: true,
    lessons: [
      { id: 'l301', title: 'Small Talk at Work & Networking', durationMinutes: 21, order: 1, isCompleted: true },
      { id: 'l302', title: 'Expressing Opinions Tactfully', durationMinutes: 27, order: 2, isCompleted: false },
      { id: 'l303', title: 'Overcoming Speaking Anxiety', durationMinutes: 19, order: 3, isCompleted: false },
    ],
  },
  {
    id: 'c4',
    title: 'IELTS Preparation Course',
    category: 'Exam Preparation',
    lessonsCount: 50,
    durationHours: 45,
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', // Modern architecture glass skyscraper
    rating: 4.96,
    description: 'Target Band 7.5+ with proven academic writing templates, speaking exam simulations, and listening tactics.',
    featured: true,
    lessons: [
      { id: 'l401', title: 'IELTS Academic Writing Task 2 Framework', durationMinutes: 34, order: 1, isCompleted: false },
      { id: 'l402', title: 'Speaking Part 2: 2-Minute Monologue Mastery', durationMinutes: 29, order: 2, isCompleted: false },
      { id: 'l403', title: 'Reading Skimming & Scanning Under Pressure', durationMinutes: 31, order: 3, isCompleted: false },
    ],
  },
  {
    id: 'c5',
    title: 'Business English & Leadership Communication',
    category: 'Business',
    lessonsCount: 32,
    durationHours: 24,
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    description: 'Master high-stakes boardroom presentations, email negotiation, and executive verbal communication.',
    featured: false,
  },
  {
    id: 'c6',
    title: 'Academic Writing & Research Essays',
    category: 'Academic',
    lessonsCount: 30,
    durationHours: 22,
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    rating: 4.87,
    description: 'Produce clear, persuasive academic papers with advanced thesis formulation and academic vocabulary.',
    featured: false,
  },
  {
    id: 'c7',
    title: 'Accent & Pronunciation Clinic',
    category: 'Skills',
    lessonsCount: 24,
    durationHours: 18,
    level: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    rating: 4.94,
    description: 'Refine vowel sounds, connected speech, intonation rhythms, and sound natural in any context.',
    featured: false,
  },
];

export const heroStats: HeroStatistic[] = [
  { id: 's1', value: '10K+', label: 'Active Students', iconName: 'users' },
  { id: 's2', value: '200+', label: 'Video Lessons', iconName: 'graduation-cap' },
  { id: 's3', value: '95%', label: 'Success Rate', iconName: 'chart' },
  { id: 's4', value: '4.9', label: 'Student Rating', iconName: 'star' },
];

export const floatingFeatures: FloatingFeature[] = [
  { id: 'f1', title: 'Learn', subtitle: 'Practical Skills', iconName: 'rocket' },
  { id: 'f2', title: 'Practice', subtitle: 'Real Situations', iconName: 'chart' },
  { id: 'f3', title: 'Grow', subtitle: 'A Brighter You', iconName: 'users' },
];

export const platformFeatures: PlatformFeature[] = [
  { id: 'pf1', title: 'Interactive Video Lessons', iconName: 'video' },
  { id: 'pf2', title: 'Quizzes & Assessments', iconName: 'quiz' },
  { id: 'pf3', title: 'Track Your Progress', iconName: 'progress' },
  { id: 'pf4', title: 'Earn Certificates', iconName: 'certificate' },
  { id: 'pf5', title: 'Supportive Community', iconName: 'community' },
];

export const currentProgressDemo: StudentProgress = {
  courseId: 'c2',
  courseTitle: 'English Grammar Made Simple',
  currentLessonTitle: 'Lesson 3',
  lessonNumber: 3,
  remainingMinutes: 18,
  percentage: 60,
};

export const categoriesList = [
  'All Courses',
  'Grammar',
  'Conversation',
  'Exam Preparation',
  'Skills',
  'Academic',
  'Business',
] as const;
