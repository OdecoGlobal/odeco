import Link from 'next/link';
import { pages } from '@/lib/constants';
import { ModeToggle } from '../mode-toogle';
import Menu from './menu';

const Header = () => {
  return (
    <header>
      <div className="wrapper flex-between">
        <Link href="/">
          {/* LOGO */}
          <h1 className="text-xs">OKECHUKWU CHIDERA</h1>
        </Link>

        <nav className="hidden md:flex w-full max-w-xs gap-8">
          {pages.map(page => (
            <Link key={page.name} href={page.href}>
              {page.name}
            </Link>
          ))}
        </nav>
        <div className="flex-between space-x-3">
          <ModeToggle />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
