import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: '"Outfit", system-ui, sans-serif',
    body: '"DM Sans", system-ui, sans-serif',
  },
  colors: {
    brand: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    surf: {
      bg: '#f4f6fb',
      bgAlt: '#ffffff',
      surface: '#ffffff',
      surfaceMuted: '#f8fafc',
      border: '#e2e8f0',
      borderStrong: '#cbd5e1',
      text: '#0f172a',
      textMuted: '#475569',
      textSubtle: '#94a3b8',
      accent: '#4f46e5',
      accentSoft: '#6366f1',
      glow: '#0ea5e9',
    },
  },
  styles: {
    global: {
      'html, body': {
        bg: 'surf.bg',
        color: 'surf.text',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        borderRadius: 'full',
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '700',
        letterSpacing: '-0.02em',
        color: 'surf.text',
      },
    },
  },
});

export default theme;
