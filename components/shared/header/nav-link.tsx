'use client';
import { useScrollSpy } from '@/hooks/use-scrollspy';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const pages = [
  {
    name: 'Home',
    href: 'home',
  },

  {
    name: 'Projects',
    href: 'projects',
  },
  {
    name: 'Skills',
    href: 'skills',
  },
  {
    name: 'Contact',
    href: 'contact',
  },
];

const NavLink = () => {
  const sections = pages.map(page => page.href);
  const active = useScrollSpy(sections, 100);

  return (
    <>
      {pages.map(page => (
        <Link
          key={page.name}
          href={`#${page.href}`}
          className={cn(
            'pb-1 transition-colors hover:border-b-2',
            active === page.href
              ? 'border-b-2 border-foreground font-semibold'
              : '',
          )}
        >
          {page.name}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
