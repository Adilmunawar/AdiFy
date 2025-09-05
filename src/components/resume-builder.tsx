'use client';

import ResumeForm from '@/components/resume-form';
import ResumePreview from '@/components/resume-preview';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ResumeBuilder() {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-65px)]">
      <ResumeForm />
      <ScrollArea className="h-full bg-secondary/50">
        <div id="resume-container" className="p-4 sm:p-8 flex items-center justify-center">
            <ResumePreview />
        </div>
      </ScrollArea>
    </div>
  );
}
