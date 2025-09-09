'use client';
// import { useScrollSpy } from '@/hooks/use-scrollspy';
import { pages } from '@/lib/constants';
import Link from 'next/link';

const DesktopNav = () => {
  //   const sections = pages.map(page => page.href);
  //   const active = useScrollSpy(sections, 100);
  return (
    <nav className="hidden w-full max-w-xs gap-8 md:flex ">
      {pages.map(page => (
        <Link key={page.name} href={page.href}>
          {page.name}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
