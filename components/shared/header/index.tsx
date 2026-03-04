import Link from 'next/link';
// import { pages } from '@/lib/constants';
import { ModeToggle } from '../mode-toogle';
import Menu from './menu';
import NavLink from './nav-link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <nav className="sticky top-0 z-20  border-b shadow-md bg-background/80 backdrop-blur-md">
      <div className="wrapper flex-between">
        <Link href="/">
          <Avatar className="w-15 h-15">
            <AvatarImage src="/img/logo.png" alt="Logo" />
            <AvatarFallback>Od</AvatarFallback>
          </Avatar>
        </Link>

        <div className="hidden w-full max-w-xs gap-8 md:flex">
          <NavLink />
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
