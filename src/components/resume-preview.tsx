'use client';

import { useResumeStore } from '@/lib/store';
import { Card } from '@/components/ui/card';
import { DefaultTemplate } from './templates/default-template';
import { ModernTemplate } from './templates/modern-template';
import { ClassicTemplate } from './templates/classic-template';
import { ExecutiveTemplate } from './templates/executive-template';
import { CreativeTemplate } from './templates/creative-template';
import { MinimalistTemplate } from './templates/minimalist-template';

export default function ResumePreview() {
  const { resume } = useResumeStore();
  const { template } = resume;

  const renderTemplate = () => {
    switch(template) {
      case 'modern':
        return <ModernTemplate resume={resume} />;
      case 'classic':
        return <ClassicTemplate resume={resume} />;
      case 'executive':
        return <ExecutiveTemplate resume={resume} />;
      case 'creative':
        return <CreativeTemplate resume={resume} />;
      case 'minimalist':
        return <MinimalistTemplate resume={resume} />;
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
