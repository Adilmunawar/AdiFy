'use client';

import AppHeader from '@/components/app-header';
import ResumeBuilder from '@/components/resume-builder';
import { useResumeStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function BuilderPage() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // This component now correctly handles client-side rendering to avoid hydration errors.
    // The useResumeStore hook, which uses localStorage, will only be active on the client.
    if (!isClient) {
        return null; // or a loading spinner
    }

    return (
        <div className="flex flex-col h-full">
          <AppHeader />
          <ResumeBuilder />
        </div>
      );
}
