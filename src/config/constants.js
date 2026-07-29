// Application constants

export const APP = {
  name: 'STQ',
  fullName: 'Standard To Quality',
  slogan: 'Standard To Quality — ยกระดับมาตรฐานสู่คุณภาพของผลงาน',
  version: '1.0.0',
  description: 'เว็บแอปเขียนและอ่านนิยายแบบ Local-First',
};

export const STORAGE = {
  keys: {
    novels: 'stq-novels',
    history: 'stq-history',
    readingSettings: 'stq-reading-settings',
    userProfile: 'stq-user-profile',
    theme: 'stq-theme',
  },
};

export const ROUTES = {
  home: '/',
  library: '/library',
  history: '/history',
  profile: '/profile',
  novelEditor: '/editor/:id?',
  novelReader: '/reader/:id/:chapterId?',
};

export const NOVEL_STATUS = {
  draft: 'draft',
  published: 'published',
  completed: 'completed',
};

export const NOVEL_STATUS_LABELS = {
  [NOVEL_STATUS.draft]: 'Draft',
  [NOVEL_STATUS.published]: 'Published',
  [NOVEL_STATUS.completed]: 'Completed',
};

export const GENRES = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Thriller',
  'Western',
  'Poetry',
  'Short Story',
  'Non-Fiction',
  'Biography',
];

export const READING_SETTINGS_DEFAULTS = {
  fontSize: 16,
  fontFamily: 'Inter',
  lineHeight: 1.6,
  letterSpacing: 0.5,
  margin: 20,
  theme: 'light',
};

export const FONT_FAMILIES = [
  { label: 'Inter', value: 'Inter' },
  { label: 'Georgia', value: 'Georgia' },
  { label: 'JetBrains Mono', value: 'JetBrains Mono' },
  { label: 'Merriweather', value: 'Merriweather' },
  { label: 'Times New Roman', value: 'Times New Roman' },
];

export const FONT_SIZES = [
  { label: '12px', value: 12 },
  { label: '14px', value: 14 },
  { label: '16px', value: 16 },
  { label: '18px', value: 18 },
  { label: '20px', value: 20 },
  { label: '24px', value: 24 },
  { label: '28px', value: 28 },
  { label: '32px', value: 32 },
];

export const LINE_HEIGHTS = [
  { label: '1.2', value: 1.2 },
  { label: '1.4', value: 1.4 },
  { label: '1.6', value: 1.6 },
  { label: '1.8', value: 1.8 },
  { label: '2.0', value: 2.0 },
];
