export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'OdecoGlobal';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A modern reponsive portfolio website built for Okechukwu Chidera with modern technology stacks';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Projects',
    href: '/#projects',
  },
  {
    name: 'Skills',
    href: '/#skills',
  },
  {
    name: 'Contact',
    href: '/#contact',
  },

  {
    name: 'Blog',
    href: '/blog',
  },
];
