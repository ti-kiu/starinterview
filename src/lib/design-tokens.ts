/**
 * Design Tokens — StarInterview (AI Interview Coach)
 *
 * 这是设计真源：所有颜色/字体/间距/圆角/阴影从这里提取。
 * 前端直接使用 Tailwind theme 变量，不要硬编码色值。
 *
 * 与 tonetool.org 的差异：
 * - tonetool: 深色主题 + 青色强调 + DM Sans/Space Grotesk
 * - StarInterview: 浅色主题 + 蓝色强调 + Inter
 */

export const designTokens = {
  // ── 色彩 ──
  colors: {
    primary: {
      DEFAULT: '#2563EB',    // 蓝色主色
      hover: '#1D4ED8',      // hover 加深
      light: '#DBEAFE',      // 浅蓝背景
      dark: '#1E40AF',       // 最深蓝
    },
    accent: {
      DEFAULT: '#10B981',    // 绿色强调
      hover: '#059669',
      light: '#D1FAE5',
    },
    neutral: {
      50: '#FAF8F5',
      100: '#F5F0EB',
      200: '#E8E0D8',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    white: '#FFFFFF',
    background: '#FAF8F5',
    error: '#EF4444',
    warning: '#F59E0B',
    success: '#10B981',
  },

  // ── 字体 ──
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    sizes: {
      xs: '0.75rem',     // 12px - 辅助文字
      sm: '0.875rem',    // 14px - 正文小
      base: '1rem',      // 16px - 正文
      lg: '1.125rem',    // 18px - 副标题
      xl: '1.25rem',     // 20px - H3
      '2xl': '1.5rem',   // 24px - H2
      '3xl': '1.875rem', // 30px - H1 mobile
      '4xl': '2.25rem',  // 36px - H1 desktop
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  // ── 间距 ──
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    section: '6rem', // 96px - 页面区块间距
  },

  // ── 圆角 ──
  borderRadius: {
    sm: '0.375rem',  // 6px - 输入框
    md: '0.5rem',    // 8px - 卡片
    lg: '0.75rem',   // 12px - 按钮
    xl: '1rem',      // 16px - 大卡片
    full: '9999px',  // 圆形
  },

  // ── 阴影 ──
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.07)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    primary: '0 4px 14px rgba(37,99,235,0.25)', // 主色阴影
  },

  // ── 动画 ──
  transitions: {
    fast: '150ms ease',
    normal: '200ms ease',
    slow: '300ms ease',
  },

  // ── 交互状态 ──
  states: {
    hover: {
      button: 'brightness(0.9) or darken by one step',
      link: 'color transition to primary',
    },
    focus: {
      ring: 'ring-2 ring-primary/30',
    },
    disabled: {
      opacity: 'opacity-50 cursor-not-allowed',
    },
    loading: {
      indicator: 'spinner icon + "Analyzing..." text',
    },
    error: {
      style: 'bg-red-50 text-red-600 border border-red-200 rounded-lg p-3',
    },
    success: {
      style: 'bg-green-50 text-green-600 border border-green-200 rounded-lg p-3',
    },
  },

  // ── 断点 ──
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const;
