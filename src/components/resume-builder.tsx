'use client';

import ResumeForm from '@/components/resume-form';
import ResumePreview from '@/components/resume-preview';

export default function ResumeBuilder() {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-[450px_1fr] h-[calc(100vh-65px)]">
      <div className="h-full no-print">
        <ResumeForm />
      </div>
      <div className="h-full bg-secondary/50 overflow-hidden flex justify-center items-start">
        <div id="resume-container" className="py-8">
            <ResumePreview />
        </div>
      </div>
    </div>
  );
}
