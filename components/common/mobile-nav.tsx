import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, Package2 } from "lucide-react";
import Link from "next/link";

const MobileNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0 md:hidden  ">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className=" z-[5000000] bg-muted rounded-b-3xl pb-14"
      >
        <nav className="grid gap-6 text-lg font-medium">
          {navItems.map((navItem, index) => (
            <Link
              key={index}
              href={navItem.link}
              className="text-muted-foreground text-xl hover:text-foreground"
            >
              {navItem.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
