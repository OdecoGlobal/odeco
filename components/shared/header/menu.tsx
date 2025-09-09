'use client';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../../ui/sheet';
import { MenuIcon } from 'lucide-react';
import { pages } from '@/lib/constants';
import { useState } from 'react';

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="align-middle">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center">
          <SheetTitle className="mt-10 sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only" />
          {pages.map(page => (
            <Link
              key={page.name}
              href={page.href}
              onClick={() => setOpen(false)}
            >
              {page.name}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menu;
