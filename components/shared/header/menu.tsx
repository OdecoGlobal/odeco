'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../../ui/sheet';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import NavLink from './nav-link';

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
          <NavLink />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menu;
