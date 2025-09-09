import Link from 'next/link';
import { pages } from '@/lib/constants';
import { ModeToggle } from '../mode-toogle';
import Menu from './menu';

const Header = () => {
  return (
    <nav className="sticky top-0 z-20 p-5 border-b shadow-md bg-background/80 backdrop-blur-md">
      <div className="wrapper flex-between">
        <Link href="/">
          {/* LOGO */}
          <h1 className="text-xs">OC</h1>
        </Link>

        <div className="hidden w-full max-w-xs gap-8 md:flex">
          {pages.map(page => (
            <Link key={page.name} href={page.href}>
              {page.name}
            </Link>
          ))}
        </div>
        <div className="space-x-3 flex-between">
          <ModeToggle />
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
