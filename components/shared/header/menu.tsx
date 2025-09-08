import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../../ui/sheet';
import { MenuIcon } from 'lucide-react';
import { pages } from '@/lib/constants';

const Menu = () => {
  return (
    <div className="flex justify-center gap-8 border">
      {/* DESKTOP NAV */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center">
            <SheetTitle className="mt-10">Menu</SheetTitle>
            {pages.map(page => (
              <Link key={page.name} href={page.href}>
                {page.name}
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
