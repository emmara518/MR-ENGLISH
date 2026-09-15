export const tokens = {
  colors: {
    bgPrimary: '#F5F6F4',
    bgSecondary: '#E9EEF0',
    dark: '#16232E',
    darkElevated: '#1D2D3B',
    secondaryText: '#52616B',
    lime: '#C6D94E',
    limeHover: '#B8CC42',
    limeSubtle: '#F4F7E6',
    white: '#FFFFFF',
    border: '#E5EAE8',
    borderSubtle: 'rgba(255, 255, 255, 0.1)',
  },
  radii: {
    sm: '0.5rem',      // 8px
    md: '0.75rem',     // 12px
    lg: '1rem',        // 16px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '2rem',     // 32px
    pill: '9999px',
  },
  typography: {
    fontSans: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    fontHandwriting: "'Caveat', cursive",
  },
  shadows: {
    subtle: '0 2px 8px -2px rgba(22, 35, 46, 0.05), 0 1px 4px -1px rgba(22, 35, 46, 0.03)',
    card: '0 12px 30px -10px rgba(22, 35, 46, 0.08)',
    elevated: '0 20px 40px -15px rgba(22, 35, 46, 0.12)',
    floating: '0 15px 35px -5px rgba(22, 35, 46, 0.15)',
  },
} as const;
