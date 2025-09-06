
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
    <Card id="resume-preview" className={`w-[8.5in] h-[11in] mx-auto shadow-lg`}>
      {renderTemplate()}
    </Card>
  );
}
