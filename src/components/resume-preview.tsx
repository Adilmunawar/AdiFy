'use client';

import { useResumeStore } from '@/lib/store';
import { Card } from '@/components/ui/card';
import { DefaultTemplate } from './templates/default-template';
import { ModernTemplate } from './templates/modern-template';
import { ClassicTemplate } from './templates/classic-template';
import { ExecutiveTemplate } from './templates/executive-template';
import { CreativeTemplate } from './templates/creative-template';
import { MinimalistTemplate } from './templates/minimalist-template';
import { resumeSchema } from '@/lib/schema';
import type { ResumeSchema as ResumeSchemaType } from '@/lib/schema';
import { useFormContext } from 'react-hook-form';

export default function ResumePreview() {
  const { resume: storedResume } = useResumeStore();
  const form = useFormContext<ResumeSchemaType>();
  
  // Use form state if available (for instant updates), otherwise use stored state
  const resume = form ? form.watch() : storedResume;

  // Ensure data is valid before rendering
  const parseResult = resumeSchema.safeParse(resume);
  if (!parseResult.success) {
    // You could show a loading/error state here
    return (
        <Card className={`w-full max-w-[8.5in] aspect-[8.5/11] mx-auto shadow-lg print:shadow-none flex items-center justify-center`}>
            <p>Loading preview...</p>
        </Card>
    );
  }

  const validResume = parseResult.data;
  const { template } = validResume;

  const renderTemplate = () => {
    switch(template) {
      case 'modern':
        return <ModernTemplate resume={validResume} />;
      case 'classic':
        return <ClassicTemplate resume={validResume} />;
      case 'executive':
        return <ExecutiveTemplate resume={validResume} />;
      case 'creative':
        return <CreativeTemplate resume={validResume} />;
      case 'minimalist':
        return <MinimalistTemplate resume={validResume} />;
      default:
        return <DefaultTemplate resume={validResume} />;
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
