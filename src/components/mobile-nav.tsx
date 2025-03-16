"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <SheetTitle hidden>Mobile Nav</SheetTitle>
        <SheetDescription hidden>
          This a navigation menu for mobile devices
        </SheetDescription>
        <div className="flex flex-col gap-6 px-2 py-6">
          <Link
            href="/"
            className="text-xl font-bold"
            onClick={() => setOpen(false)}
          >
            Jeremiah Plumstead
          </Link>
          <nav className="flex flex-col gap-4">
            <Link
              href="#about"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
