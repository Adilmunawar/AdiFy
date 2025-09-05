'use client';

import { useResumeStore } from '@/lib/store';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { DefaultTemplate } from './templates/default-template';
import { ModernTemplate } from './templates/modern-template';
import { ClassicTemplate } from './templates/classic-template';

export default function ResumePreview({ isThumbnail = false }) {
  const { resume } = useResumeStore();
  const { template } = resume;

  const renderTemplate = () => {
    switch(template) {
      case 'modern':
        return <ModernTemplate resume={resume} />;
      case 'classic':
        return <ClassicTemplate resume={resume} />;
      default:
        return <DefaultTemplate resume={resume} />;
    }
  }

  return (
    <div id="resume-preview">
      <Card className={`w-full max-w-[8.5in] aspect-[8.5/11] mx-auto shadow-lg print:shadow-none`}>
        {renderTemplate()}
      </Card>
    </div>
  );
}
