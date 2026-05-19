export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/cpaeljippeleemiejdjndmgffggbkkjc';

export const MOCK_HOSTNAME = 'developer.blog';

export const FEATURES = [
  {
    title: 'Dark mode on any site',
    description:
      'ShadowSurf applies a polished dark theme to pages that were never designed for night browsing.',
  },
  {
    title: 'One-click toggle',
    description:
      'Flip dark mode on or off globally from the toolbar popup in a single tap.',
  },
  {
    title: 'Per-site control',
    description:
      'Keep your favorite sites in light mode while the rest of the web stays dark.',
  },
  {
    title: 'Smart media handling',
    description:
      'Images and video get brightness and contrast tuning instead of harsh color inversion.',
  },
  {
    title: 'Lightweight & fast',
    description:
      'A single injected stylesheet and class toggle keep pages responsive.',
  },
  {
    title: 'Clean interface',
    description:
      'A focused popup with only the controls you need—no clutter, no noise.',
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Install from Chrome',
    description:
      'Add ShadowSurf from the Chrome Web Store. It runs locally—no account required.',
    anchor: undefined,
  },
  {
    step: '02',
    title: 'Browse as usual',
    description:
      'Visit any website. Dark mode applies automatically at page load before you see a flash of white.',
    anchor: undefined,
  },
  {
    step: '03',
    title: 'Fine-tune in the popup',
    description:
      'Open the extension panel to adjust this site, tune brightness, or manage your blacklist.',
    anchor: 'demo',
  },
] as const;
