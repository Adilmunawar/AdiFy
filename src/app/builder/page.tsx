'use client';

import AppHeader from '@/components/app-header';
import ResumeBuilder from '@/components/resume-builder';
import { useDebouncedResumeStore } from '@/lib/store';

export default function BuilderPage() {
  // We're using a debounced version of the store here to prevent excessive re-renders
  // on every keystroke, which can be performance-intensive.
  const { resume } = useDebouncedResumeStore();

  return (
    <div className="flex flex-col h-full">
      <AppHeader />
      <ResumeBuilder />
    </div>
  );
}
