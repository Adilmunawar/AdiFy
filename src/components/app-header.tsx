'use client';

import { Download, LayoutTemplate } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useResumeStore } from '@/lib/store';

export default function AppHeader() {
  const { setTemplateSwitcherOpen } = useResumeStore();

  return (
    <>
      <header className="flex items-center justify-between p-4 border-b bg-background sticky top-0 z-10 no-print">
        <h1 className="text-2xl font-bold tracking-tight text-primary-foreground">
          Adify AI Resume Builder
        </h1>
        <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setTemplateSwitcherOpen(true)}>
                <LayoutTemplate className="mr-2 h-4 w-4" />
                Templates
            </Button>
            <Button onClick={() => typeof window !== 'undefined' && window.print()}>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
            </Button>
        </div>
      </header>
    </>
  );
}
