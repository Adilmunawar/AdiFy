'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "../logo";

const navLinks = [
  { name: "Resume Templates", href: "#" },
  { name: "Cover Letter", href: "#" },
  { name: "Career Blog", href: "#" },
  { name: "About Us", href: "#" },
];

export default function Header() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
            <Link href="/builder">
                <Button>Create My Resume</Button>
            </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" onClick={() => setIsSheetOpen(false)}>
                  <Logo />
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="text-lg text-gray-700 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t pt-6 flex flex-col gap-4">
                    <Link href="/builder">
                        <Button className="w-full" onClick={() => setIsSheetOpen(false)}>Create My Resume</Button>
                    </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
