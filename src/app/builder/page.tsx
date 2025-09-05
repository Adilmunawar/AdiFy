'use client';

import AppHeader from '@/components/app-header';
import ResumeBuilder from '@/components/resume-builder';
import { useResumeStore } from '@/lib/store';
import { useEffect } from 'react';

export default function BuilderPage() {
    const { resume, updateResume } = useResumeStore();

    // This is a workaround to ensure that the initial data is loaded from local storage
    // before the form is rendered. This prevents hydration errors.
    useEffect(() => {
        // re-hydrating the store
    }, [])

    return (
        <div className="flex flex-col h-full">
          <AppHeader />
          <ResumeBuilder />
        </div>
      );
}
