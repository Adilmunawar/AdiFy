
'use client';

import { useResumeStore } from '@/lib/store';
import { Card } from '@/components/ui/card';
import { AdvancedTemplate } from './templates/advanced-template';
import { ModernTemplate } from './templates/modern-template';
import { ClassicTemplate } from './templates/classic-template';
import { ExecutiveTemplate } from './templates/executive-template';
import { CreativeTemplate } from './templates/creative-template';
import { MinimalistTemplate } from './templates/minimalist-template';
import { ProfessionalTemplate } from './templates/professional-template';
import { TechnicalTemplate } from './templates/technical-template';
import { CorporateTemplate } from './templates/corporate-template';
import { Creative2Template } from './templates/creative-2-template';


export default function ResumePreview() {
  const { resume } = useResumeStore();
  const { template, theme } = resume || {};

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
      case 'professional':
        return <ProfessionalTemplate resume={resume} />;
      case 'technical':
        return <TechnicalTemplate resume={resume} />;
      case 'corporate':
        return <CorporateTemplate resume={resume} />;
      case 'creative-2':
        return <Creative2Template resume={resume} />;
      default:
        return <AdvancedTemplate resume={resume} />;
    }
  }

  return (
    <>
      <style>{`
        #resume-preview {
          --primary: ${theme?.primaryColor};
        }
      `}</style>
      <Card id="resume-preview" className={`w-[8.5in] h-[11in] mx-auto shadow-lg`}>
        {renderTemplate()}
      </Card>
    </>
  );
}
