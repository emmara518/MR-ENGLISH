export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  initials: string;
  studentsCount: number;
  rating: number;
}

export interface Lesson {
  id: string;
  title: string;
  durationMinutes: number;
  videoUrl?: string;
  isCompleted?: boolean;
  order: number;
}

export interface Course {
  id: string;
  title: string;
  category: 'Foundation' | 'Grammar' | 'Conversation' | 'Exam Preparation' | 'Skills' | 'Academic' | 'Business';
  lessonsCount: number;
  durationHours: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  imageUrl: string;
  rating: number;
  description: string;
  lessons?: Lesson[];
  featured?: boolean;
}

export interface HeroStatistic {
  id: string;
  value: string;
  label: string;
  iconName: 'users' | 'graduation-cap' | 'chart' | 'star';
}

export interface FloatingFeature {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'rocket' | 'chart' | 'users';
}

export interface PlatformFeature {
  id: string;
  title: string;
  iconName: 'video' | 'quiz' | 'progress' | 'certificate' | 'community';
}

export interface StudentProgress {
  courseId: string;
  courseTitle: string;
  currentLessonTitle: string;
  lessonNumber: number;
  remainingMinutes: number;
  percentage: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  avatarUrl?: string;
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  questionCount: number;
  passingScore: number;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  dueDate: string;
}

export interface Certificate {
  id: string;
  courseId: string;
  courseTitle: string;
  studentName: string;
  issueDate: string;
  verificationCode: string;
}
