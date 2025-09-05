import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResumeBuilder from '@/components/resume-builder';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-4 border-b bg-background sticky top-0 z-10 no-print">
        <h1 className="text-2xl font-bold tracking-tight text-primary-foreground">
          Adify AI Resume Builder
        </h1>
        <Button onClick={() => typeof window !== 'undefined' && window.print()}>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </header>
      <ResumeBuilder />
    </div>
  );
}
