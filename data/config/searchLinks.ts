export const searchLinks: Array<{
  id: string;
  name: string;
  keywords: string;
  shortcut?: string[];
  section: string;
  href: string;
}> = [
  {
    id: '',
    name: 'Home',
    keywords: '',
    section: 'Navigation',
    href: '/',
  },
  {
    id: 'deals',
    name: 'Deals',
    keywords: '',
    section: 'Navigation',
    href: '/deals',
  },
  {
    id: 'about',
    name: 'About',
    keywords: '',
    section: 'Navigation',
    href: '/about',
  },
  {
    id: 'all-articles',
    name: 'Articles',
    keywords: '',
    section: 'Navigation',
    href: '/all-articles',
  },
];
