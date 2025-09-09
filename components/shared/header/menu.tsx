import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../../ui/sheet';
import { MenuIcon } from 'lucide-react';
import { pages } from '@/lib/constants';

const Menu = () => {
  return (
    <div className=" md:hidden">
      {/* mobile NAV */}
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
    </div>
  );
};

export default Menu;
