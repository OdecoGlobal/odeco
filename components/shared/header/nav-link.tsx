'use client';
import { useScrollSpy } from '@/hooks/use-scrollspy';
import { pages } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const NavLink = () => {
  const sections = pages
    .map(page => page.href)
    .filter((href): href is string => href !== null);
  const active = useScrollSpy(sections, 60);

  return (
    <>
      {pages.map(page => {
        const isHome = page.href === null;
        const isActive = isHome ? active === null : active === page.href;
        return (
          <Link
            key={page.name}
            href={isHome ? '/' : `#${page.href}`}
            className={cn(
              'pb-1 transition-colors hover:border-b-2',
              isActive && 'border-b-2 border-foreground font-semibold',
            )}
          >
            {page.name}
          </Link>
        );
      })}
    </>
  );
};

export default NavLink;
