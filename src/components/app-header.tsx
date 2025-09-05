'use client';

import { Download, LayoutTemplate } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TemplateSwitcher from '@/components/template-switcher';
import { useState } from 'react';

export default function AppHeader() {
  const [isTemplateSwitcherOpen, setIsTemplateSwitcherOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-4 border-b bg-background sticky top-0 z-10 no-print">
        <h1 className="text-2xl font-bold tracking-tight text-primary-foreground">
          Adify AI Resume Builder
        </h1>
        <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setIsTemplateSwitcherOpen(true)}>
                <LayoutTemplate className="mr-2 h-4 w-4" />
                Templates
            </Button>
            <Button onClick={() => typeof window !== 'undefined' && window.print()}>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
            </Button>
        </div>
      </header>
      <TemplateSwitcher isOpen={isTemplateSwitcherOpen} onOpenChange={setIsTemplateSwitcherOpen} />
    </>
  );
}
